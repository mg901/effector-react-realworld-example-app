export const TOKEN_NAME = 'jwt';
const API_ROOT = 'https://conduit.productionready.io/api';

type Request = <T>(method: string, url: string, data?: unknown) => Promise<T>;

const request: Request = async (method, url, data) => {
  const token = JSON.parse(String(localStorage.getItem(TOKEN_NAME)));

  const headers = {
    'Content-Type': 'application/json',
  };

  const options: RequestInit = {
    headers: token ? { ...headers, Authorization: `Token ${token}` } : headers,
    method: method.toUpperCase(),
    body: data ? JSON.stringify(data) : null,
  };

  const response = await fetch(`${API_ROOT}${url}`, options);

  if (response.ok) {
    return response.json();
  }
  throw await response.json();
};

export const get = <T>(url: string): Promise<T> => request<T>('get', url);
export const post = <T>(url: string, body: unknown): Promise<T> =>
  request<T>('post', url, body);

export const put = <T>(url: string, body: unknown): Promise<T> =>
  request<T>('put', url, body);
export const del = <T>(url: string): Promise<T> => request<T>('del', url);
