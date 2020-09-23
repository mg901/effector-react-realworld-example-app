import { createEvent, createEffect } from 'effector';
import * as api from 'api';
import * as auth from 'features/user';
import { Form } from './types';

export const formSubmitted = createEvent<Form>();

export const fxSignUp = createEffect<
  Form,
  auth.types.AuthorizedUser,
  auth.types.AuthFail
>({
  handler: ({ username, email, password }) =>
    api
      .post<auth.types.AuthUserResponse>('/users', {
        user: { email, password, username },
      })
      .then((response) => response.user),
});
