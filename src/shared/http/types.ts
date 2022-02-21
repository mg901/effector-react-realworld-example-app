export interface IHttpClientError<FailData = any> extends Error {
  readonly status?: number;
  readonly statusText: string;
  readonly data: FailData;
}

export type Method = 'GET' | 'POST' | 'DELETE' | 'PUT';

export type HttpClientOptions = {
  url: string;
  method: Method;
  headers?: Record<string, string>;
  body?: any;
  signal?: AbortSignal;
};

export type HttpClientResponse<Data = any> = {
  headers: Record<string, string>;
  ok: boolean;
  status: number;
  statusText: string;
  url: string;
  data: Data;
};

export type InitOptions = {
  baseURL: string;
  onError?: (error: IHttpClientError) => void;
};
export interface IHttpClient<R = void> {
  init: (options: InitOptions) => void;
  request<T = R>(options: HttpClientOptions): Promise<HttpClientResponse<T>>;
}
