export const TOKEN_NAME = 'jwt';
const API_ROOT = 'https://conduit.productionready.io/api';

type Request = <T>(method: string, url: string, data?: unknown) => Promise<T>;

const request: Request = async (method, url, data) => {
  const h = new Headers();
  const token = localStorage.getItem(TOKEN_NAME);

  h.append('Content-Type', 'application/json');

  if (token) h.append('Authorization', `Token ${token}`);

  const options: RequestInit = {
    headers: h,
    method: method.toUpperCase(),
  };

  if (data) options.body = JSON.stringify(data);

  const res = await fetch(`${API_ROOT}${url}`, options);

  if (res.ok) {
    return res.json();
  }
  throw await res.json();
};

export const get = <T>(url: string): Promise<T> => request<T>('get', url);
export const post = <T>(url: string, body: unknown): Promise<T> =>
  request<T>('post', url, body);

export const put = <T>(url: string, body: unknown): Promise<T> =>
  request<T>('put', url, body);
export const del = <T>(url: string): Promise<T> => request<T>('del', url);
