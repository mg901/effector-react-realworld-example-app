import { createForm } from 'effector-forms';
import { createGate } from 'effector-react';
import { AxiosError } from 'axios';
import { request } from '../../../api';
import { types } from '../../../modules/user';
import { root } from '../../../root';
import { Form, Errors } from './types';

export const formSubmitted = root.createEvent<React.FormEvent>();

export const signInFx = root.createEffect<Form, types.User, AxiosError>({
  handler: ({ email, password }) =>
    request
      .post<{ user: types.User }>('users/login', {
        user: { email, password },
      })
      .then((x) => x.data.user),
});

export const FormGate = createGate();

export const form = createForm({
  fields: {
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
