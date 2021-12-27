import { createEffect, createStore, forward } from 'effector';
import { useStore } from 'effector-react';
import * as visitor from 'entities/visitor';
import * as http from 'shared/http';
import * as router from 'shared/library/router';
import * as api from './api';
import { FormValues } from './types';

export const changeUserDataFx = createEffect<
  FormValues,
  http.types.ApiResponse<void>,
  http.types.ApiError<Record<string, unknown>>
>(api.changeUserData);

export const navigateToRootFx = createEffect(() => {
  router.history.push('/');
});

const reloadPageFx = createEffect(() => {
  window.location.reload();
});

export const $user = visitor.$visitor.map((x) => ({
  image: x.image,
  username: x.username,
  bio: x.bio,
  email: x.email,
  password: '',
}));

export const $error = createStore<Record<string, unknown>>({
  errors: {},
}).on(changeUserDataFx.failData, (_, error) => error.response?.data);

forward({
  from: changeUserDataFx.done,
  to: reloadPageFx,
});

forward({
  from: visitor.loggedOutClicked,
  to: navigateToRootFx,
});

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
