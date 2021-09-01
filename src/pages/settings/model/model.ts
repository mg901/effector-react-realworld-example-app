import { createDomain, sample, merge } from 'effector';
import { createForm } from 'effector-forms';
import { createGate } from 'effector-react';
import * as user from 'entities/user';
import * as api from 'shared/api';
import { history } from 'shared/library/router';
import { Errors, changeUserDataFxArgs } from './types';

export const domain = createDomain('settings-page');
export const formSubmitted = domain.createEvent();

export const changeUserDataFx = domain.createEffect<
  changeUserDataFxArgs,
  api.types.ApiResponse<void>,
  api.types.ApiError
>((payload) => {
  return api.put('user', {
    user: payload,
  });
});

export const FormGate = createGate();
export const $authUser = user.model.$user.map((x) => x);

export const form = createForm({
  fields: {
    image: {
      init: '' as user.types.User['image'],
    },
    username: {
      init: '' as user.types.User['username'],
    },
    bio: {
      init: '' as user.types.User['bio'],
    },
    email: {
      init: '' as user.types.User['email'],
    },
    password: {
      init: '' as string,
    },
  },
});

// set data form user store
sample({
  source: $authUser,
  clock: merge([FormGate.open, $authUser.updates]),
  target: form.set,
});

// submit form
sample({
  source: form.$values,
  clock: formSubmitted,
  target: changeUserDataFx,
});

changeUserDataFx.done.watch(() => {
  window.location.reload();
});

user.model.loggedOutClicked.watch(() => {
  history.push('/');
});

export const $errors = domain
  .createStore<Errors>({
    errors: {},
  })
  .on(changeUserDataFx.failData, (_, error) => error.response?.data)
  .reset(form.$values, FormGate.close);
