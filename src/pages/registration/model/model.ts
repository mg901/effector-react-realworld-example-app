import { createEvent, createEffect } from 'effector';
import { post } from '../../../api';
import * as auth from '../../../features/auth';
import { Form } from './types';

export const formSubmitted = createEvent<Form>();

export const fxSignUp = createEffect<
  Form,
  auth.types.AuthUserResponse,
  auth.types.AuthFail
>({
  handler: ({ username, email, password }) =>
    post('/users', { user: { email, password, username } }),
});
