import { createStore, createEffect } from 'effector';
import * as api from 'api';
import * as currentUser from 'features/current-user';
import { createFormEvents } from 'library/form';
import * as types from './types';

export const {
  fieldChanged,
  handleFieldChanged,
  formSubmitted,
} = createFormEvents();

export const signUpFx = createEffect<
  types.Form,
  currentUser.types.User,
  types.ErrorType
>({
  handler: ({ username, email, password }) =>
    api
      .post<currentUser.types.SignUpFxDone>('/users', {
        user: { email, password, username },
      })
      .then((x) => x.user),
});

export const $form = createStore<types.Form>({
  username: '',
  email: '',
  password: '',
});

export const $errors = createStore<types.ErrorType>({
  errors: [],
});
