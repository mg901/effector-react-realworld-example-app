export interface IHttpClientError {
  readonly status?: number;
}

export type Method = 'GET' | 'POST' | 'DELETE' | 'PUT';

export type RequestOptions = {
  url: string;
  method: Method;
  body?: any;
};

export type InitOptions = {
  baseURL: string;
  onError: (error: IHttpClientError) => void;
};
export interface IHttpClient<R = void> {
  init: (options: InitOptions) => void;
  request<T = R>(options: RequestOptions): Promise<T>;
}
