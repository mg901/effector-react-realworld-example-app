import { createEffect, createStore } from 'effector';
import * as user from 'entities/user';
import * as api from 'shared/api';
import * as router from 'shared/library/router';
import * as types from './types';

export const signUpFx = createEffect<
  types.FormType,
  user.types.User,
  api.types.ApiError
>(({ username, email, password }) => {
  return api
    .post('users', {
      user: { username, email, password },
    })
    .then((x) => x.data.user);
});

signUpFx.done.watch(() => {
  router.history.push('/');
});

user.model.$user.on(signUpFx.doneData, (_, payload) => payload);

export const $error = createStore<Record<string, unknown>>({
  errors: {},
}).on(signUpFx.failData, (_, error) => error.response?.data);
