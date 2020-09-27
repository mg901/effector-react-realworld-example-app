import { createEffect, createStore } from 'effector';
import * as api from 'api';
import * as currentUser from 'features/current-user';
import { createFormEvents } from 'library/form';
import * as types from './types';

export const {
  fieldChanged,
  handleFieldChanged,
  formSubmitted,
} = createFormEvents();

export const changeUserDataFx = createEffect<
  currentUser.types.User,
  void,
  types.ErrorType
>({
  handler: (user) => api.put('/user', { user }),
});

export const $errors = createStore<types.ErrorType>({
  errors: [],
});
