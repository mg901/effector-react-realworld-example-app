import { createEffect, createStore } from 'effector';
import { useStore, createGate } from 'effector-react';
import * as visitor from 'entities/visitor';
import * as api from 'shared/api';
import * as router from 'shared/library/router';
import * as endpoints from './endpoints';
import * as types from './types';

export const signUpFx = createEffect<
  types.FormValues,
  visitor.types.Visitor,
  api.types.ApiError<Record<string, unknown>>
>(endpoints.signUp);

signUpFx.done.watch(() => {
  router.history.push('/');
});

visitor.$visitor.on(signUpFx.doneData, (_, payload) => payload);

export const Gate = createGate();
export const $error = createStore<Record<string, unknown>>({
  errors: {},
}).on(signUpFx.failData, (_, error) => error.response?.data);

export const $hasError = $error.map(
  (error) => Object.keys(Object(error)).length > 0,
);

export const $errors = $error.map((error) =>
  Object.entries(Object(error?.errors)),
);

export const selectors = {
  useSignUpPending: () => useStore(signUpFx.pending),
  useHasError: () => useStore($hasError),
  useErrors: () => useStore($errors),
};
