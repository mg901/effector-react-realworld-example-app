import { createEffect, createStore } from 'effector';
import * as visitor from 'entities/visitor';
import * as api from 'shared/api';
import * as router from 'shared/library/router';
import * as types from './types';

export const signUpFx = createEffect<
  types.FormType,
  visitor.types.Visitor,
  api.types.ApiError<Record<string, unknown>>
>(({ username, email, password }) => {
  return api
    .post<{ user: visitor.types.Visitor }>('users', {
      user: { username, email, password },
    })
    .then((response) => response.data.user);
});

signUpFx.done.watch(() => {
  router.history.push('/');
});

visitor.model.$visitor.on(signUpFx.doneData, (_, payload) => payload);

export const $error = createStore<Record<string, unknown>>({
  errors: {},
}).on(signUpFx.failData, (_, error) => error.response?.data);

export const $hasError = $error.map(
  (error) => Object.keys(Object(error)).length > 0,
);

export const $errors = $error.map((error) =>
  Object.entries(Object(error?.errors)),
);
