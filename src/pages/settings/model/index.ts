import {
  createEvent,
  createEffect,
  createStore,
  sample,
  merge,
} from 'effector-root';
import { createForm } from 'effector-forms';
import { createGate } from 'effector-react';
import { AxiosResponse, AxiosError } from 'axios';
import { api } from 'shared/api';
import * as user from 'shared/user';
import { history } from 'router';
import { Errors, changeUserDataFxArgs } from './types';

export const formSubmitted = createEvent<React.FormEvent>();
formSubmitted.watch((e) => e.preventDefault());

export const changeUserDataFx = createEffect<
  changeUserDataFxArgs,
  AxiosResponse<void>,
  AxiosError
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

export const $error = createStore<Errors>({
  errors: {},
})
  .on(changeUserDataFx.failData, (_, error) => error.response?.data)
  .reset(form.$values, FormGate.close);
