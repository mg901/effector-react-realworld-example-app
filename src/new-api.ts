import { createStore, createEffect, attach, Effect } from 'effector';
import { API_ROOT } from './config';
import { $token } from './auth';

export const $backendUrl = createStore<string>(API_ROOT);

// type RequestType = {
//   path: string;
//   method: string;
//   body?: object;
//   headers?: Record<string, string>;
// };

type RequestType = RequestInit & {
  path: string;
  method: 'get' | 'post' | 'put' | 'delete';
};

export const fxRequestInternal = createEffect<RequestType, any, any>({
  handler: async ({ path, method, body, headers }) => {
    const response = await fetch(path, {
      method: method.toUpperCase(),
      body: body ? JSON.stringify(body) : undefined,
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        ...headers,
      },
    });

    if (!response.ok) {
      throw new Error(await response.statusText);
    }

    return response.json();
  },
});

export const fxRequest = attach({
  source: $backendUrl,
  effect: fxRequestInternal,
  mapParams: ({ path, ...rest }: RequestType, backendUrl) => ({
    ...rest,
    path: `${backendUrl}${path}`,
  }),
});

export const fxRequestAuthorized = attach({
  source: $token,
  effect: fxRequest,
  mapParams: ({ headers, ...params }: RequestType, token) => {
    if (!token) {
      throw new Error('authorization token required');
    }

    return {
      ...params,
      headers: { ...headers, Authorization: `Token ${token}` },
    };
  },
});

type Foo = RequestType & {
  authorized: boolean;
};

const createRequest = <Payload extends RequestType, Done, Fail>({
  method,
  path,
  authorized,
}: Foo): Effect<Payload, Done, Fail> =>
  attach({
    effect: authorized ? fxRequestAuthorized : fxRequest,
    mapParams: (body) => ({
      method,
      path,
      body,
    }),
  });

export const createUser = createRequest<Foo, null, Error>({
  method: 'post',
  path: '/users',
  authorized: true,
});
