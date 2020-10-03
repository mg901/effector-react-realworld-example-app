import axios from 'axios';
import { model } from './features/user';

export const request = axios.create({
  baseURL: 'https://conduit.productionready.io/api/',
});

model.$token.updates.watch((token) => {
  request.defaults.headers.common.Authorization = `Token ${token ?? ''}`;
});
