import { createStore, createEffect, attach, Effect } from 'effector';
import { API_ROOT } from './config';
import { $token } from './auth';

export const $backendUrl = createStore<string>(API_ROOT);

type RequestType = RequestInit & {
  path: string;
  method: 'get' | 'post' | 'put' | 'delete';
};

export const InitialRequestFx = createEffect<RequestType, any, any>({
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

export const AnonimusRequestFx = attach({
  source: $backendUrl,
  effect: InitialRequestFx,
  mapParams: ({ path, ...rest }: RequestType, backendUrl) => ({
    ...rest,
    path: `${backendUrl}${path}`,
  }),
});

export const AuthorizedRequestFx = attach({
  source: $token,
  effect: AnonimusRequestFx,
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

type CreateRequestOpts = RequestType & {
  authorized: boolean;
};

const createRequest = <Payload, Done, Fail>({
  method,
  path,
  authorized,
}: CreateRequestOpts) =>
  attach({
    effect: authorized ? AuthorizedRequestFx : AnonimusRequestFx,
    mapParams: (params) => ({ method, path, ...params }),
  }) as Effect<Payload, Done, Fail>;

export const createUserFx = createRequest<RequestType, null, Error>({
  authorized: true,
  method: 'post',
  path: '/users',
  body: JSON.stringify({ foo: 1 }),
});
