import { createEffect, createStore } from 'effector';
import * as visitor from 'entities/visitor';
import * as api from 'shared/api';
import * as router from 'shared/library/router';

export type Form = {
  email: string;
  password: string;
};

export const signInFx = createEffect<
  Form,
  visitor.types.User,
  api.types.ApiError<Record<string, unknown>>
>(({ email, password }) => {
  return api
    .post<{ user: visitor.types.User }>('users/login', {
      user: { email, password },
    })
    .then((x) => x.data.user);
});

signInFx.done.watch(() => {
  router.history.push('/');
});

visitor.model.$visitor.on(signInFx.doneData, (_, payload) => payload);

export const $error = createStore<Record<string, unknown>>({
  errors: {},
}).on(signInFx.failData, (_, error) => error.response?.data);

export const $hasError = $error.map((x) => Object.keys(Object(x)).length > 0);
export const $errors = $error.map((x) => Object.entries(Object(x?.errors)));
