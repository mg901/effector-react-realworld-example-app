import axios from 'axios';
import * as router from './library/router';

export const api = axios.create({
  baseURL: process.env.API_ROOT || 'https://conduit.productionready.io/api/',
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      router.model.history.push(router.Paths.LOGIN);
    }

    return Promise.reject(error);
  },
);

export const setToken = (token: null | string): void => {
  if (token) {
    api.defaults.headers.common.Authorization = `Token ${token}`;
  }
};
