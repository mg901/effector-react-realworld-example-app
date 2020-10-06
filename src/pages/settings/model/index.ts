import { createForm } from 'effector-forms';
import { createGate } from 'effector-react';
import { AxiosResponse, AxiosError } from 'axios';
import { request } from '../../../api';
import { model, types } from '../../../modules/app';
import { Errors, changeUserDataFxArgs } from './types';

export const formSubmitted = model.domain.createEvent<React.FormEvent>();

export const changeUserDataFx = model.domain.createEffect<
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
export const $authUser = model.$user.map((x) => x);

export const form = createForm({
  fields: {
    image: {
      init: '' as types.User['image'],
    },
    username: {
      init: '' as types.User['username'],
    },
    bio: {
      init: '' as types.User['bio'],
    },
    email: {
      init: '' as types.User['email'],
    },
    password: {
      init: '' as string,
    },
  },
});

export const $errors = model.domain.createStore<Errors>({
  errors: {},
});
