import { createStore, createEffect } from 'effector';
import { createGate } from 'effector-react';
import * as api from 'api';
import * as user from 'features/user';
import { createFormEvents } from 'library/form';
import * as types from './types';

export const {
  fieldChanged,
  handleFieldChanged,
  formSubmitted,
} = createFormEvents();

export const signUpFx = createEffect(
  ({ username, email, password }: types.Form) =>
    api
      .post<{ user: user.types.User }>('/users', {
        user: { email, password, username },
      })
      .then((x) => x.user),
);

export const PageGate = createGate();
export const $form = createStore<types.Form>({
  username: '',
  email: '',
  password: '',
});

export const $errors = createStore<Errors>({
  errors: '',
});
