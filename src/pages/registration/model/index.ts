import { sample, forward } from 'effector';
import { createForm } from 'effector-forms';
import { createGate } from 'effector-react';
import { AxiosError } from 'axios';
import { request } from '../../../api';
import * as user from '../../../modules/user';
import { root } from '../../../root';
import { Form, Errors } from './types';

export const formSubmitted = root.createEvent<React.FormEvent>();
formSubmitted.watch((e) => e.preventDefault());

export const signUpFx = root.createEffect<Form, user.types.User, AxiosError>({
  handler: ({ username, email, password }) =>
    request
      .post<{ user: user.types.User }>('users', {
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

export const $errors = root
  .createStore<Errors>({
    errors: {},
  })
  .on(signUpFx.failData, (_, error) => error.response?.data)
  .reset(form.$values, FormGate.close);
