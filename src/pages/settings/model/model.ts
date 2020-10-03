import { createEffect, createStore } from 'effector';
import { createGate } from 'effector-react';
import { AxiosResponse, AxiosError } from 'axios';
import { request } from 'api';
import * as user from 'features/user';
import { createFormEvents } from 'library/form';
import * as types from './types';

export const {
  fieldChanged,
  handleFieldChanged,
  formSubmitted,
} = createFormEvents();

export const changeUserDataFx = createEffect<
  user.types.User,
  AxiosResponse<void>,
  AxiosError
>({
  handler: (x: user.types.User) => request.put<void>('user', { user: x }),
});

export const PageGate = createGate();
export const $user = user.model.$user.map((x) => x);
export const $errors = createStore<types.Errors>({
  errors: {},
});
