import { createEffect, createStore } from 'effector';
import * as user from 'entities/user';
import * as api from 'shared/api';
import { history } from 'shared/library/router';
import { changeUserDataFxArgs } from './types';

export const changeUserDataFx = createEffect<
  changeUserDataFxArgs,
  api.types.ApiResponse<void>,
  api.types.ApiError<Record<string, unknown>>
>((payload) => {
  return api.put('user', {
    user: payload,
  });
});

export const $user = user.model.$user.map((x) => ({
  image: x.image,
  username: x.username,
  bio: x.bio,
  email: x.email,
  password: '',
}));

changeUserDataFx.done.watch(() => {
  window.location.reload();
});

user.model.loggedOutClicked.watch(() => {
  history.push('/');
});

export const $error = createStore<Record<string, unknown>>({
  errors: {},
}).on(changeUserDataFx.failData, (_, error) => error.response?.data);

export const $hasError = $error.map((x) => Object.keys(Object(x)).length > 0);
export const $errors = $error.map((x) => Object.entries(Object(x?.errors)));
