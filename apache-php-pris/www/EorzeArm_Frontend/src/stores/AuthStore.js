import { defineStore } from 'pinia';
import ApiBackend from '@/services/ApiBackendService';
import axios from 'axios';

var vite_debug = import.meta.env.VITE_DEBUG;
const debug = vite_debug === 'true' || vite_debug === true;

var version = import.meta.env.VITE_VERSION;

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    user: null,

    access_token: null,
    credentials: null,
    
    redirect_to: null,
    redirect_params: null,

    isTokenRefreshHandlerEnabled: false,
    intervalRefreshToken: null
  }),
  actions: {
  initialize() {
    // Initialize access token
    const token = this.getAccessToken();
    this.access_token = token;
    
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

    return ApiBackend.post('/login', data).then(res => {
      localStorage.setItem('auth_token', res.token);
      this.setAccessToken(res.token);
      this.enableRefreshTokenHandler();
    }).catch(err => {
      return Promise.reject(err);
    });
  },
  logout() {
    this.user = null
    this.roles = [];
    this.options = [];
    this.ultima_conexion = null;
    this.tieneMensajesSinLeer = false;
    this.access_token = null;
    this.credentials = null;
    this.bloqueo = null;

    if( debug ) {
      localStorage.removeItem('access_token');
      localStorage.removeItem('roles');
      localStorage.removeItem('options');
      localStorage.removeItem('user');
    }

    this.disableRefreshTokenHandler();
  },
  profile() {
    return ApiBackend.get('perfil').then(res => {
      if (!res.resultados) return Promise.reject({ mensaje: 'No se ha podido recoger la información del usuario.' });

      if (res?.resultados?.ultima_conexion) {
        this.setUltimaConexion(res.resultados.ultima_conexion);
      }
      
      if (res?.resultados?.mensajes_nuevos?.mensajes_nuevos ) {
        var mensajesSinLeer = parseInt(res.resultados.mensajes_nuevos.mensajes_nuevos) > 0 ? true : false;
        this.setMensajesSinLeer(mensajesSinLeer);
      }

      if(res?.resultados?.bloqueos) this.setBloqueo(res.resultados.bloqueos);


      if (res?.resultados?.roles) this.setRoles(res.resultados.roles);
      if (res?.resultados?.opciones) this.setOptions(res.resultados.opciones);

      if (res?.resultados?.datos) this.setUserData(res.resultados.datos);
      if (res?.resultados?.datos?.qr) res.resultados.datos.qr = ApiBackend.parseResponse(res.resultados.datos.qr);

      return res.resultados.datos;
    }).catch(err => {
      return Promise.reject(err);
    })
  },
  setUserData(user) {
    this.user = user;
    if( debug ) localStorage.setItem('user', JSON.stringify(user));
  },
  getUserData() {
    if( !debug ) return this.user;
    else {
      if (this.user) return this.user;

      var user = JSON.parse(localStorage.getItem('user'));
      return user;
    }
  },
  setAccessToken(token) {
    this.access_token = token;
    if( debug ) localStorage.setItem('access_token', token);
  },
  getAccessToken() {
    if( !debug ) return this.access_token;
    else {
      if (this.access_token) return this.access_token;

      var access_token = localStorage.getItem('access_token');
      return access_token
    }
  },
  isAuthenticated() {
    var access_token = this.getAccessToken();
    if (!access_token) return false;
    return true;
  },
  getCredentials: function(){
    if( this.credentials ) return this.credentials;
    
    var credentials = localStorage.getItem('credentials');
    return credentials;
  },
  setCredentials: function(credentials){
    if( !credentials ) return;

    this.credentials = credentials;
    localStorage.setItem('credentials', credentials);
  },
  removeCredentials: function(){
    this.credentials = null;
    localStorage.removeItem('credentials');
  },
  setRedirectTo: function(redirect){
    this.redirect_to = redirect;
  },
  getRedirectTo: function(){
    return this.redirect_to;
  },
  setRedirectParams: function(params){
    this.redirect_params = params;
  },
  getRedirectParams: function(){
    return this.redirect_params;
  },
  enableRefreshTokenHandler: function(rol){
    if( this.isTokenRefreshHandlerEnabled ) return;
    this.isTokenRefreshHandlerEnabled = true;

    var refreshToken = () => {
      if( !rol ) var rol = 'socios';

      ApiBackend.post(rol + "/renovarToken").then(response => {
        if( response?.token ) this.setAccessToken(response.token);
      }).catch(error => {
        if( this.intervalRefreshToken ) this.disableRefreshTokenHandler();
      });
    }

    this.intervalRefreshToken = setInterval(refreshToken, 1000 * 60 * 25); //25 minutos
  },
  disableRefreshTokenHandler: function(){
    this.isTokenRefreshHandlerEnabled = false;
    if( this.intervalRefreshToken ) clearInterval(this.intervalRefreshToken);
  },
}})
