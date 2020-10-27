import axios from 'axios';
import * as router from './library/router';
import { model } from './modules/user';

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

model.$token.watch((token) => {
  if (token) {
    api.defaults.headers.common.Authorization = `Token ${token}`;
  }
});
