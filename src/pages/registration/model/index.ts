import { createForm } from 'effector-forms';
import { createGate } from 'effector-react';
import { AxiosError } from 'axios';
import { request } from '../../../api';
import { types } from '../../../modules/user';
import { root } from '../../../root';
import { Form, Errors } from './types';

export const formSubmitted = root.createEvent<React.FormEvent>();

export const signUpFx = root.createEffect<Form, types.User, AxiosError>({
  handler: ({ username, email, password }) =>
    request
      .post<{ user: types.User }>('users', {
        user: { email, password, username },
      })
      .then((x) => x.data.user),
});

export const FormGate = createGate();

export const form = createForm({
  fields: {
    username: {
      init: '' as Form['username'],
    },
    email: {
      init: '' as Form['email'],
    },
    password: {
      init: '' as Form['password'],
    },
  },
});

export const $errors = root.createStore<Errors>({
  errors: {},
});
