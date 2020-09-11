import { createEvent, createEffect } from 'effector';
import { authTypes } from '@core/auth';
import { post } from '@api';
import * as types from './types';

export const formSubmitted = createEvent<types.Form>();

export const fxSignIn = createEffect<
  types.Form,
  authTypes.AuthUserResponse,
  authTypes.AuthFail
>({
  handler: ({ email, password }: types.Form) =>
    post<authTypes.AuthUserResponse>('/users/login', {
      user: { email, password },
    }),
});
