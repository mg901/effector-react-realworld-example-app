import { createEffect, createStore } from 'effector';
import { useStore } from 'effector-react';
import * as visitor from 'entities/visitor';
import * as api from 'shared/api';
import { history } from 'shared/library/router';
import { FormValues } from './types';

export const changeUserDataFx = createEffect<
  FormValues,
  api.types.ApiResponse<void>,
  api.types.ApiError<Record<string, unknown>>
>(async (payload) => {
  const result = await api.put('user', {
    user: payload,
  });

  return result;
});

export const $user = visitor.$visitor.map((x) => ({
  image: x.image,
  username: x.username,
  bio: x.bio,
  email: x.email,
  password: '',
}));

changeUserDataFx.done.watch(() => {
  window.location.reload();
});

visitor.loggedOutClicked.watch(() => {
  history.push('/');
});

export const $error = createStore<Record<string, unknown>>({
  errors: {},
}).on(changeUserDataFx.failData, (_, error) => error.response?.data);

export const $hasError = $error.map(
  (error) => Object.keys(Object(error)).length > 0,
);

export const $errors = $error.map((error) =>
  Object.entries(Object(error?.errors)),
);

export const selectors = {
  useOnSubmitPending: () => useStore(changeUserDataFx.pending),
  useUser: () => useStore($user),
  useHasError: (): boolean => useStore($hasError),
  useErrors: () => useStore($errors),
};
