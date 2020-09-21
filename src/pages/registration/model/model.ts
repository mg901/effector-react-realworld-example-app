import { createEvent, createEffect } from 'effector';
import * as api from 'api';
import * as auth from 'features/auth';
import { Form } from './types';

export const formSubmitted = createEvent<Form>();

export const fxSignUp = createEffect<
  Form,
  auth.types.AuthUserResponse,
  auth.types.AuthFail
>({
  handler: ({ username, email, password }) =>
    api.post('/users', { user: { email, password, username } }),
});
