import { createDomain, sample, forward } from 'effector';
import { createForm } from 'effector-forms';
import { createGate } from 'effector-react';

import * as user from 'entities/user';
import * as api from 'shared/api';
import * as errorsList from 'widgets/error-list';
import { Form } from './types';

export const domain = createDomain('registration-page');
export const formSubmitted = domain.createEvent();

export const signUpFx = domain.createEffect<
  Form,
  user.types.User,
  api.types.ApiError
>(({ username, email, password }) => {
  return api
    .post('users', {
      user: { email, password, username },
    })
    .then((x) => x.data.user);
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

errorsList.model.$errors
  .on(signUpFx.failData, (_, error) => error.response?.data)
  .reset(form.$values, FormGate.close);
