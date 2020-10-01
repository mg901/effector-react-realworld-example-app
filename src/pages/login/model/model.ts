import { createStore, createEffect } from 'effector';
import * as api from 'api';
import * as user from 'features/user';
import { createFormEvents } from 'library/form';
import * as types from './types';

export const {
  fieldChanged,
  handleFieldChanged,
  formSubmitted,
} = createFormEvents();

export const signInFx = createEffect(({ email, password }: types.Form) =>
  api
    .post<{ user: user.types.User }>('/users/login', {
      user: { email, password },
    })
    .then((x) => x.user),
);

export const $form = createStore<types.Form>({
  email: '',
  password: '',
});
export const $errors = createStore<Errors>({
  errors: [],
});
