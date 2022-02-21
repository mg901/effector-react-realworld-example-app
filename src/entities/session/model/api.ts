import * as http from '@/shared/http';
import * as user from '@/entities/user';
import * as types from './types';

export const signIn = ({
  ctrl = new AbortController(),
  email,
  password,
}: types.SignInArgs) =>
  http.client
    .request<{ user: user.types.User }>({
      url: '/users/login',
      method: 'POST',
      signal: ctrl.signal,
      body: {
        user: { email, password },
      },
    })
    .then((response) => response.data);

export const signUp = ({
  ctrl = new AbortController(),
  username,
  email,
  password,
}: types.SignUpArgs) =>
  http.client
    .request<{ user: user.types.User }>({
      url: '/users',
      method: 'POST',
      signal: ctrl.signal,
      body: {
        user: { username, email, password },
      },
    })
    .then((response) => response.data);
