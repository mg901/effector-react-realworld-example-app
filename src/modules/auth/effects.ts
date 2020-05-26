import { createEffect, merge } from 'effector';
import { TOKEN_NAME, post, get } from '../../api';
import { fxFetchGlobalFeed } from '../global-feed';
import { fxFetchPersonalFeed } from '../personal-feed';
import { fxFetchTags } from '../tags';
import { Form, AuthorizedUserResponse, ResponseFail } from './types';

export const fxSetTokenToLoST = createEffect<
  AuthorizedUserResponse,
  void,
  ResponseFail
>({
  handler: ({ user: { token } }) => {
    localStorage.setItem(TOKEN_NAME, token as string);
  },
});

export const fxGetTokenFromLoSt = createEffect({
  handler: () => localStorage.getItem(TOKEN_NAME),
});

export const fxRemveTokenFromLoSt = createEffect({
  handler: () => {
    localStorage.removeItem(TOKEN_NAME);
  },
});

export const fxFetchAuthUser = createEffect({
  handler: () => get<AuthorizedUserResponse>('/user'),
});

export const fxInitAuthApp = createEffect({
  handler: () =>
    Promise.all([fxFetchAuthUser(), fxFetchPersonalFeed(), fxFetchTags()]),
});

export const fxIntitNotAuthApp = createEffect({
  handler: () => Promise.all([fxFetchGlobalFeed(), fxFetchTags()]),
});

export const fxSignIn = createEffect<
  Form,
  AuthorizedUserResponse,
  ResponseFail
>({
  handler: ({ email, password }) =>
    post<AuthorizedUserResponse>('/users/login', {
      user: { email, password },
    }),
});

export const fxSignUp = createEffect<
  Form,
  AuthorizedUserResponse,
  ResponseFail
>({
  handler: ({ username, email, password }) =>
    post('/users', { user: { email, password, username } }),
});

export const fxLogout = createEffect({
  handler: () => Promise.all([fxRemveTokenFromLoSt()]),
});
