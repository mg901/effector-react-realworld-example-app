import { createDomain, sample, forward } from 'effector';
import { createForm } from 'effector-forms';
import { createGate } from 'effector-react';

import * as user from 'entities/user';
import * as errorsList from 'features/error-list';
import * as api from 'shared/api';
import { history } from 'shared/library/router';
import { Form } from './types';

export const domain = createDomain('login');
export const formSubmitted = domain.createEvent();

export const signInFx = domain.createEffect<
  Form,
  user.types.User,
  api.types.ApiError
>(({ email, password }) => {
  return api
    .post('users/login', {
      user: { email, password },
    })
    .then(({ data }) => data.user);
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

// submit form
sample({
  source: form.$values,
  clock: formSubmitted,
  target: signInFx,
});

// reset form
forward({
  from: FormGate.close,
  to: form.reset,
});

signInFx.done.watch(() => {
  history.push('/');
});

user.model.$user.on(signInFx.doneData, (_, payload) => payload);

errorsList.model.$errors
  .on(signInFx.failData, (_, error) => error.response?.data)
  .reset(form.$values, FormGate.close);
