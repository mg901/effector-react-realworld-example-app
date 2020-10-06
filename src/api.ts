import axios from 'axios';
import { model } from './modules/app';

export const request = axios.create({
  baseURL: 'https://conduit.productionready.io/api/',
});

model.$token.watch((token) => {
  if (token) {
    request.defaults.headers.common.Authorization = `Token ${token}`;
  }
});
