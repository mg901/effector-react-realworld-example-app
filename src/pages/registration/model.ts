import { createEvent, createEffect } from 'effector';
import { post } from '../../api';
import { authTypes } from '../../core/auth';
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
