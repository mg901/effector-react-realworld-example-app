import { createForm } from 'effector-forms';
import { createGate } from 'effector-react';
import { AxiosResponse, AxiosError } from 'axios';
import { request } from '../../../api';
import * as user from '../../../modules/user';
import { root } from '../../../root';
import { Errors, changeUserDataFxArgs } from './types';

export const formSubmitted = root.createEvent<React.FormEvent>();

export const changeUserDataFx = root.createEffect<
  changeUserDataFxArgs,
  AxiosResponse<void>,
  AxiosError
>({
  handler: (x) =>
    request.put<void>('user', {
      user: x,
    }),
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

export const $errors = root.createStore<Errors>({
  errors: {},
});
