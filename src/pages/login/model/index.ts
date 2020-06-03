import { createEvent, createEffect } from 'effector';
import { post } from '../../../api';
import { AuthUserResponse, AuthFail } from '../../../auth';
import { Form } from './types';

export const formSubmitted = createEvent<Form>();

export const fxSignIn = createEffect<Form, AuthUserResponse, AuthFail>({
  handler: ({ email, password }: Form) =>
    post<AuthUserResponse>('/users/login', {
      user: { email, password },
    }),
});
