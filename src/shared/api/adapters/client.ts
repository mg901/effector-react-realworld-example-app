/* eslint-disable no-param-reassign */
import type { AxiosError } from 'axios';
import axios, { Axios } from 'axios';
import * as types from '../types';
import { HttpClientError } from './error';

export const api = createAdapter(axios);

export function createAdapter(adaptee: Axios): types.IHttpClient {
  return {
    ...withInit(adaptee),
    ...withRequest(adaptee),
  };
}

function withInit(adaptee: Axios) {
  return {
    init(options: types.InitOptions): void {
      adaptee.defaults.baseURL = options.baseURL;

      adaptee.interceptors.response.use(
        (response) => response,
        (error: AxiosError) => {
          options.onError(new HttpClientError(error));

          return Promise.reject(error);
        },
      );
    },
  };
}

function withRequest(adaptee: Axios) {
  return {
    request<T>(options: types.RequestOptions): Promise<T> {
      const { url, method, body } = options;

      return adaptee
        .request({
          url,
          method,
          data: body,
        })
        .then((response) => response.data)
        .catch((error) => {
          throw new HttpClientError(error);
        });
    },
  };
}
