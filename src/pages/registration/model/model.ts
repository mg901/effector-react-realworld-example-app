import { createStore, createEffect } from 'effector';
import { createGate } from 'effector-react';
import { AxiosError } from 'axios';
import { request } from 'api';
import * as user from 'features/user';
import { createFormEvents } from 'library/form';
import * as types from './types';

export const {
  fieldChanged,
  handleFieldChanged,
  formSubmitted,
} = createFormEvents();

export const signUpFx = createEffect<types.Form, user.types.User, AxiosError>({
  handler: ({ username, email, password }) =>
    request
      .post<{ user: user.types.User }>('users', {
        user: { email, password, username },
      })
      .then((x) => x.data.user),
});

export const PageGate = createGate();
export const $form = createStore<types.Form>({
  username: '',
  email: '',
  password: '',
});

export const $errors = createStore<types.Errors>({
  errors: {},
});
