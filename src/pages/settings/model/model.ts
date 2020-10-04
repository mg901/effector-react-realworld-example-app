import { createEvent, createEffect, createStore } from 'effector';
import { createForm } from 'effector-forms';
import { createGate } from 'effector-react';
import { AxiosResponse, AxiosError } from 'axios';
import { request } from 'api';
import * as user from 'features/user';
import * as types from './types';

export const formSubmitted = createEvent<React.FormEvent>();

export const changeUserDataFx = createEffect<
  types.changeUserDataFxArgs,
  AxiosResponse<void>,
  AxiosError
>({
  handler: (x) =>
    request.put<void>('user', {
      user: x,
    }),
});

export const FormGate = createGate();
export const $user = user.model.$user.map((x) => x);

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

export const $errors = createStore<types.Errors>({
  errors: {},
});
