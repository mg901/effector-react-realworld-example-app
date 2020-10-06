import { createEvent, createEffect, createStore } from 'effector';
import { createForm } from 'effector-forms';
import { createGate } from 'effector-react';
import { AxiosResponse, AxiosError } from 'axios';
import { request } from '../../../api';
import { $user } from '../../../features/user';
import { User } from '../../../features/user/types';
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
export const $authUser = $user.map((x) => x);

export const form = createForm({
  fields: {
    image: {
      init: '' as User['image'],
    },
    username: {
      init: '' as User['username'],
    },
    bio: {
      init: '' as User['bio'],
    },
    email: {
      init: '' as User['email'],
    },
    password: {
      init: '' as string,
    },
  },
});

export const $errors = createStore<types.Errors>({
  errors: {},
});
