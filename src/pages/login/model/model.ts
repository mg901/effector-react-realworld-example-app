import { createEvent, createEffect } from 'effector';
import * as api from 'api';
import * as auth from 'features/auth';
import * as types from './types';

export const formSubmitted = createEvent<types.Form>();

export const fxSignIn = createEffect<
  types.Form,
  auth.types.AuthUserResponse,
  auth.types.AuthFail
>({
  handler: ({ email, password }: types.Form) =>
    api.post<auth.types.AuthUserResponse>('/users/login', {
      user: { email, password },
    }),
});
