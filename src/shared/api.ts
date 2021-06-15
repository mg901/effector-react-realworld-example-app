import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.API_ROOT || 'https://conduit.productionready.io/api/',
});

export const setToken = (token: string): void => {
  api.defaults.headers.common.Authorization = `Token ${token}`;
};
