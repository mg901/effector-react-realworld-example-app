import { createEffect, createStore } from 'effector';
import * as user from 'entities/user';
import * as api from 'shared/api';
import * as router from 'shared/library/router';

export type Form = {
  email: string;
  password: string;
};

export const signInFx = createEffect<Form, user.types.User, api.types.ApiError>(
  ({ email, password }) => {
    return api
      .post('users/login', {
        user: { email, password },
      })
      .then((x) => x.data.user);
  },
);

signInFx.done.watch(() => {
  router.history.push('/');
});

user.model.$user.on(signInFx.doneData, (_, payload) => payload);

export const $error = createStore<Record<string, unknown>>({
  errors: {},
}).on(signInFx.failData, (_, error) => error.response?.data);

export const $hasError = $error.map((x) => Object.keys(Object(x)).length > 0);
export const $errors = $error.map((x) => Object.entries(Object(x?.errors)));
