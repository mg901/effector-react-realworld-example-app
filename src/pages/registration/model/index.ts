import { createForm } from 'effector-forms';
import { createGate } from 'effector-react';
import { AxiosError } from 'axios';
import { request } from '../../../api';
import { model, types } from '../../../modules/app';
import { Form, Errors } from './types';

export const formSubmitted = model.domain.createEvent<React.FormEvent>();

export const signUpFx = model.domain.createEffect<Form, types.User, AxiosError>(
  {
    handler: ({ username, email, password }) =>
      request
        .post<{ user: types.User }>('users', {
          user: { email, password, username },
        })
        .then((x) => x.data.user),
  },
);

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

export const $errors = model.domain.createStore<Errors>({
  errors: {},
});
