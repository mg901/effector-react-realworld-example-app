import axios from 'axios';
import { $token } from './features/user';

export const request = axios.create({
  baseURL: 'https://conduit.productionready.io/api/',
});

$token.watch((token) => {
  if (token) {
    request.defaults.headers.common.Authorization = `Token ${token}`;
  }
});
