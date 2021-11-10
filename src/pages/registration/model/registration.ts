import { createEffect, createStore } from 'effector';
import * as visitor from 'entities/visitor';
import * as api from 'shared/api';
import * as router from 'shared/library/router';
import * as types from './types';

export const signUpFx = createEffect<
  types.FormType,
  visitor.types.User,
  api.types.ApiError<Record<string, unknown>>
>(({ username, email, password }) => {
  return api
    .post<{ user: visitor.types.User }>('users', {
      user: { username, email, password },
    })
    .then((x) => x.data.user);
});

signUpFx.done.watch(() => {
  router.history.push('/');
});

visitor.model.$visitor.on(signUpFx.doneData, (_, payload) => payload);

export const $error = createStore<Record<string, unknown>>({
  errors: {},
}).on(signUpFx.failData, (_, error) => error.response?.data);

export const $hasError = $error.map((x) => Object.keys(Object(x)).length > 0);
export const $errors = $error.map((x) => Object.entries(Object(x?.errors)));
