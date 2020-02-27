import { createEffect, merge } from 'effector';
import { Form, UserResponse, Error } from './types';
import { TOKEN_NAME, post, get } from '../../api';
import { fxFetchUserFeed, fxFetchGlobalFeed } from '../feed';
import { fxFetchTags } from '../tags';

export const fxSetTokenToLoST = createEffect<UserResponse, void, Error>({
  handler: ({ user: { token } }) => {
    if (token) {
      localStorage.setItem(TOKEN_NAME, token);
    }
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

export const fxFetchUser = createEffect({
  handler: () => get<UserResponse>('/user'),
});

export const fxInitAuthApp = createEffect({
  handler: () => Promise.all([fxFetchUser(), fxFetchUserFeed(), fxFetchTags()]),
});

export const fxIntitNotAuthApp = createEffect({
  handler: () => Promise.all([fxFetchGlobalFeed(), fxFetchTags()]),
});

export const fxSignIn = createEffect<Form, UserResponse, Error>({
  handler: ({ email, password }) =>
    post<UserResponse>('/users/login', {
      user: { email, password },
    }),
});

export const fxSignUp = createEffect<Form, UserResponse, Error>({
  handler: ({ username, email, password }) =>
    post('/users', { user: { email, password, username } }),
});

export const fxLogout = createEffect({
  handler: () => Promise.all([fxRemveTokenFromLoSt()]),
});

export const fxAuthDone = merge([
  fxFetchUser.done,
  fxSignIn.done,
  fxSignUp.done,
]);
