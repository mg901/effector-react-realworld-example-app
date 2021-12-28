import axios from 'axios';
import * as types from './types';

export const instance = axios.create({
  baseURL: process.env.API_ROOT ?? 'https://api.realworld.io/api/',
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      window.location.assign('/login');
    }

    return Promise.reject(error);
  },
);

export const setToken = (token: string): void => {
  instance.defaults.headers.common.Authorization = `Token ${token}`;
};

export const request = <T = any>(config: types.Options): Promise<T> => {
  return instance
    .request({
      url: config.url,
      method: config.method,
      data: config?.data,
    })
    .then((response) => response.data)
    .catch((error) => error.response?.data);
};
