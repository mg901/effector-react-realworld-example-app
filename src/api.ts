import axios from 'axios';
import { model } from './modules/user';

export const request = axios.create({
  baseURL: process.env.API_ROOT || 'https://conduit.productionready.io/api/',
});

model.$token.watch((token) => {
  if (token) {
    request.defaults.headers.common.Authorization = `Token ${token}`;
  }
});
