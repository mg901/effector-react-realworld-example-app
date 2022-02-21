export interface HttpClientError<FailData = any> extends Error {
  readonly status?: number;
  readonly statusText: string;
  readonly data: FailData;
}

export type Method = 'GET' | 'POST' | 'DELETE' | 'PUT';
export type ClientHeaders = Record<string, string | number | boolean>;

export type HttpClientOptions = {
  url: string;
  method: Method;
  headers?: ClientHeaders;
  body?: any;
  signal?: AbortSignal;
};

// export type HttpClientResponse<Data = any> = {
//   headers?: ClientHeaders;
//   ok: boolean;
//   status: number;
//   statusText: string;
//   url: string;
//   data: Data;
// };

export type InitOptions = {
  baseURL: string;
  onError?: (error: HttpClientError) => void;
};
export interface HttpClient {
  init: (options: InitOptions) => void;
  request<R = void>(options: HttpClientOptions): Promise<R>;
}
