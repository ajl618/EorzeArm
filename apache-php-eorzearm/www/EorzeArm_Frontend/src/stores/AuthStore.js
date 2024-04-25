import { defineStore } from "pinia";
import ApiBackend from "@/services/ApiBackendService";
import axios from "axios";

var vite_debug = import.meta.env.VITE_DEBUG;
const debug = vite_debug === "true" || vite_debug === true;

var version = import.meta.env.VITE_VERSION;

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    user: null,

    auth_token: null,
    credentials: null,

    redirect_to: null,
    redirect_params: null,

    isTokenRefreshHandlerEnabled: false,
    intervalRefreshToken: null,
  }),
  actions: {
    initialize() {
      // Initialize access token
      const token = this.getAccessToken();
      this.auth_token = token;

      // Initialize user data
      const userData = this.getUserData();
      this.user = userData;

      // Initialize roles
      const storedRoles = this.getRoles();
      this.roles = storedRoles;

      // Initialize options
      const storedOptions = this.getOptions();
      this.options = storedOptions;

      //Initialize credentails
      const storedCredentails = this.getCredentials();
      this.credentials = storedCredentails;
    },
    login(data) {
      this.logout();

      return ApiBackend.post("/login", data)
        .then((res) => {
          localStorage.setItem("auth_token", res.token);
          this.setAccessToken(res.token);
          this.enableRefreshTokenHandler();
        })
        .catch((err) => {
          return Promise.reject(err);
        });
    },
    logout() {
      return new Promise((resolve, reject) => {
        try {
          this.user = null;
          this.auth_token = null;
          this.credentials = null;

          if (debug) {
            localStorage.removeItem("auth_token");
            localStorage.removeItem("user");
          }

          this.disableRefreshTokenHandler();

          resolve(true); 
        } catch (error) {
          reject(error); 
        }
      });
    },
    setUserData(user) {
      this.user = user;
      if (debug) localStorage.setItem("user", JSON.stringify(user));
    },
    getUserData() {
      if (!debug) return this.user;
      else {
        if (this.user) return this.user;

        var user = JSON.parse(localStorage.getItem("user"));
        return user;
      }
    },
    setAccessToken(token) {
      this.auth_token = token;
      if (debug) localStorage.setItem("auth_token", token);
    },
    getAccessToken() {
      if (!debug) return this.auth_token;
      else {
        if (this.auth_token) return this.auth_token;

        var auth_token = localStorage.getItem("auth_token");
        return auth_token;
      }
    },
    isAuthenticated() {
      var auth_token = this.getAccessToken();
      if (!auth_token) return false;
      return true;
    },
    getCredentials: function () {
      if (this.credentials) return this.credentials;

      var credentials = localStorage.getItem("credentials");
      return credentials;
    },
    setCredentials: function (credentials) {
      if (!credentials) return;

      this.credentials = credentials;
      localStorage.setItem("credentials", credentials);
    },
    removeCredentials: function () {
      this.credentials = null;
      localStorage.removeItem("credentials");
    },
    setRedirectTo: function (redirect) {
      this.redirect_to = redirect;
    },
    getRedirectTo: function () {
      return this.redirect_to;
    },
    setRedirectParams: function (params) {
      this.redirect_params = params;
    },
    getRedirectParams: function () {
      return this.redirect_params;
    },
    enableRefreshTokenHandler: function (rol) {
      if (this.isTokenRefreshHandlerEnabled) return;
      this.isTokenRefreshHandlerEnabled = true;

      var refreshToken = () => {
        if (!rol) var rol = "socios";

        ApiBackend.post(rol + "/renovarToken")
          .then((response) => {
            if (response?.token) this.setAccessToken(response.token);
          })
          .catch((error) => {
            if (this.intervalRefreshToken) this.disableRefreshTokenHandler();
          });
      };

      this.intervalRefreshToken = setInterval(refreshToken, 1000 * 60 * 25); //25 minutos
    },
    disableRefreshTokenHandler: function () {
      this.isTokenRefreshHandlerEnabled = false;
      if (this.intervalRefreshToken) clearInterval(this.intervalRefreshToken);
    },
  },
});
