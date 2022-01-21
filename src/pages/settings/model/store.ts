import { createEffect, restore, forward } from 'effector';
import { useStore } from 'effector-react';
import * as visitor from '@/entities/visitor';
import { history, ROUTES } from '@/shared/router';
import * as api from './api';
import * as types from './types';

export const changeUserDataFx = createEffect<
  types.FormInputs,
  void,
  Record<string, unknown>
>(api.changeUserData);

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

export const $error = restore(changeUserDataFx.failData, {
  errors: {},
});

forward({
  from: changeUserDataFx.done,
  to: reloadPageFx,
});

visitor.logoutClicked.watch(() => {
  history.push(ROUTES.root);
});

export const $hasError = $error.map(
  (error) => Object.keys(Object(error)).length > 0,
);

export const $errors = $error.map((error) =>
  Object.entries(Object(error?.errors)),
);

export const selectors = {
  useChangeUserDataPending: () => useStore(changeUserDataFx.pending),
  useUser: () => useStore($user),
  useHasError: (): boolean => useStore($hasError),
  useErrors: () => useStore($errors),
};
