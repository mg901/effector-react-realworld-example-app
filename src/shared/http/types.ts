export type Method = 'get' | 'delete' | 'post' | 'put';

export interface Options extends Omit<RequestInit, 'body'> {
  url: string;
  method: Method;
  data?: any;
}
