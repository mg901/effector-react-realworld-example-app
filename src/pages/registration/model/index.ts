import { createEvent, createStore, createEffect } from 'effector';
import { createForm } from 'effector-forms';
import { createGate } from 'effector-react';
import { AxiosError } from 'axios';
import { request } from '../../../api';
import { User } from '../../../features/user/types';
import * as types from './types';

export const formSubmitted = createEvent<React.FormEvent>();

export const signUpFx = createEffect<types.Form, User, AxiosError>({
  handler: ({ username, email, password }) =>
    request
      .post<{ user: User }>('users', {
        user: { email, password, username },
      })
      .then((x) => x.data.user),
});

export const FormGate = createGate();

export const form = createForm({
  fields: {
    username: {
      init: '' as types.Form['username'],
    },
    email: {
      init: '' as types.Form['email'],
    },
    password: {
      init: '' as types.Form['password'],
    },
  },
});

export const $errors = createStore<types.Errors>({
  errors: {},
});
