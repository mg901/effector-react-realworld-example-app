import { createEvent, createEffect } from 'effector';
import { authTypes } from '@core/auth';
import { post } from '@api';
import { Form } from './types';

export const formSubmitted = createEvent<Form>();

export const fxSignUp = createEffect<
  Form,
  authTypes.AuthUserResponse,
  authTypes.AuthFail
>({
  handler: ({ username, email, password }) =>
    post('/users', { user: { email, password, username } }),
});
