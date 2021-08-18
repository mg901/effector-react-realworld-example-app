import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.API_ROOT ?? 'https://conduit.productionready.io/api/',
});

export const { get, post, delete: remove, put } = instance;

export const setToken = (token: string): void => {
  instance.defaults.headers.common.Authorization = `Token ${token}`;
};
