import { createEvent, createEffect } from 'effector';
import { post } from '../../../api';
import { AuthUserResponse, AuthFail } from '../../../auth';
import { Form } from './types';

export const formSubmitted = createEvent<Form>();

export const fxSignUp = createEffect<Form, AuthUserResponse, AuthFail>({
  handler: ({ username, email, password }) =>
    post('/users', { user: { email, password, username } }),
});
