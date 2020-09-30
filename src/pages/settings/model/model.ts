import { createEffect, createStore } from 'effector';
import * as api from 'api';
import * as authUser from 'features/user';
import { createFormEvents } from 'library/form';
import * as types from './types';

export const {
  fieldChanged,
  handleFieldChanged,
  formSubmitted,
} = createFormEvents();

export const changeUserDataFx = createEffect<
  authUser.types.User,
  void,
  types.ErrorType
>({
  handler: (user) => api.put('/user', { user }),
});

export const $user = authUser.model.$user.map((x) => x);
export const $errors = createStore<types.ErrorType>({
  errors: [],
});
