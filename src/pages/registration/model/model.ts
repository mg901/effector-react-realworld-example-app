import { createEvent, createStore, createEffect } from 'effector';
import * as api from 'api';
import * as auth from 'features/user';
import { createFormEvents } from 'library/form';
import * as types from './types';

export const { fieldChanged, handleFieldChanged } = createFormEvents();
export const formSubmitted = createEvent<React.FormEvent>();

export const signUpFx = createEffect<
  types.Form,
  auth.types.User,
  types.ErrorType
>({
  handler: ({ username, email, password }) =>
    api
      .post<auth.types.SignUpFxDone>('/users', {
        user: { email, password, username },
      })
      .then((x) => x.user),
});

export const $form = createStore<types.Form>({
  username: '',
  email: '',
  password: '',
});

export const $errors = createStore<types.ErrorType>({ errors: [] });
