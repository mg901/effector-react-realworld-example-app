/* eslint-disable no-param-reassign */
import type { AxiosError } from 'axios';
import axios, { Axios } from 'axios';
import * as types from '../types';

export const client = createAdapter(axios);

export function createAdapter(adaptee: Axios): types.HttpClient {
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
          if (options.onError) {
            options.onError(new HttpClientError(error));
          }

          return Promise.reject(error);
        },
      );
    },
  };
}

function withRequest(adaptee: Axios) {
  return {
    request<T = void>(options: types.HttpClientOptions): Promise<T> {
      const { url, method, body } = options;

      return adaptee
        .request({
          url,
          method,
          headers: options.headers,
          data: body,
        })
        .then((response) => response.data)
        .catch((error) => {
          throw new HttpClientError(error);
        });
    },
  };
}

export class HttpClientError<FailData = any> extends Error {
  public readonly status?: number;

  public readonly statusText: string;

  public readonly data: FailData;

  constructor(error: AxiosError) {
    super();
    this.name = this.constructor.name;
    this.status = error.response?.status;
    this.statusText = error.response?.statusText ?? '';
    this.data = error.response?.data;
    this.message = error.response?.data.message ?? '';
  }
}
