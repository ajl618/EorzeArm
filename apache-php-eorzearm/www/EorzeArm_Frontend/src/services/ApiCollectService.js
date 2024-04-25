import { useAuthStore } from '@/stores/AuthStore';
import axios from 'axios';
import router from '@/router/index';

const api = axios.create({
  baseURL: import.meta.env.VITE_FFXIV_URL,
  timeout: 120000,
});

// api.interceptors.request.use(
//   (config) => {
//     const authStore = useAuthStore();
//     const token = authStore.getAccessToken();
//     if (token) {
//       config.headers['access-token'] = token;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response && error.response.status === 401) {
//       const authStore = useAuthStore();
//       authStore.logout();

//       router.replaceAll('/');
//     }
//     return Promise.reject(error);
//   }
// );

const handleError = (error) => {
  const defaultError = { message: 'Error al realizar la petición' };
  const { code, message, config, response, request } = error;

  var logError = {axiosCode: code, axiosMessage: message, axiosEndpoint: config?.url};
  if( response?.data ) logError.axiosData = response.data;

  if( typeof Bugfender != "undefined" ) Bugfender.error(logError);

  if ( response ) {
    const { data, status, statusText } = response;
    return Promise.reject({ data, status, statusText });
  } else if ( request ) {
    return Promise.reject(defaultError);
  }
  
  return Promise.reject(defaultError);
};

const handleResponse = (response) => {
  return Promise.resolve(response.data);
};

export default {
  get(route, config) {
    return api.get(route, config)
      .then(handleResponse)
      .catch(handleError);
  },

  post(route, data, config) {
    return api.post(route, data, config)
    .then(handleResponse)
    .catch(handleError);
  },

  put(route, data, config) {
    return api.put(route, data, config)
    .then(handleResponse)
    .catch(handleError);
  },

  delete(route, config) {
    return api.delete(route, config)
    .then(handleResponse)
    .catch(handleError);
  },
};