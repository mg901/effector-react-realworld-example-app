import {
  createEvent,
  createEffect,
  createStore,
  sample,
  forward,
} from 'effector-root';
import { createForm } from 'effector-forms';
import { createGate } from 'effector-react';

import { AxiosError } from 'axios';
import * as user from 'entities/user';
import { api } from 'shared/api';
import { Form, Errors } from './types';

export const formSubmitted = createEvent<React.FormEvent>();
formSubmitted.watch((e) => e.preventDefault());

export const signUpFx = createEffect<Form, user.types.User, AxiosError>(
  ({ username, email, password }) => {
    return api
      .post('users', {
        user: { email, password, username },
      })
      .then(({ data }) => data.user);
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

// submit form
sample({
  source: form.$values,
  clock: formSubmitted,
  target: signUpFx,
});

// reset form
forward({
  from: FormGate.close,
  to: form.reset,
});

user.model.$user.on(signUpFx.doneData, (_, payload) => payload);

export const $errors = createStore<Errors>({
  errors: {},
})
  .on(signUpFx.failData, (_, error) => error.response?.data)
  .reset(form.$values, FormGate.close);
