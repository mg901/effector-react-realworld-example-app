import { createEffect } from 'effector';
import { TOKEN_NAME, post, get } from '../api';
import { Form, AuthUserResponse, ResponseFail } from './types';

export const fxSetTokenToLoST = createEffect({
  handler: ({ user: { token } }: AuthUserResponse) => {
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
  handler: () => get<AuthUserResponse>('/user'),
});

export const fxSignIn = createEffect<Form, AuthUserResponse, ResponseFail>({
  handler: ({ email, password }) =>
    post<AuthUserResponse>('/users/login', {
      user: { email, password },
    }),
});

export const fxSignUp = createEffect<Form, AuthUserResponse, ResponseFail>({
  handler: ({ username, email, password }) =>
    post('/users', { user: { email, password, username } }),
});
