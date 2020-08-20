import { createEvent, createEffect } from 'effector';
import { post } from '../../api';
import { authTypes } from '../../core/auth';
import { Form } from './types';

export const formSubmitted = createEvent<Form>();

export const fxSignIn = createEffect<
  Form,
  authTypes.AuthUserResponse,
  authTypes.AuthFail
>({
  handler: ({ email, password }: Form) =>
    post<authTypes.AuthUserResponse>('/users/login', {
      user: { email, password },
    }),
});
