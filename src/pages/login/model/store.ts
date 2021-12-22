import { createEffect, createStore } from 'effector';
import { useStore, createGate } from 'effector-react';
import * as visitor from 'entities/visitor';
import * as api from 'shared/api';
import * as router from 'shared/library/router';
import * as endpoints from './endpoints';
import * as types from './types';

export const signInFx = createEffect<
  types.SignInPayload,
  visitor.types.Visitor,
  api.types.ApiError<Record<string, unknown>>
>(endpoints.signIn);

signInFx.done.watch(() => {
  router.history.push('/');
});

visitor.$visitor.on(signInFx.doneData, (_, payload) => payload);

export const Gate = createGate();
export const $error = createStore<Record<string, unknown>>({
  errors: {},
})
  .on(signInFx.failData, (_, error) => error.response?.data)
  .reset(Gate.close);

export const $hasError = $error.map((x) => Object.keys(Object(x)).length > 0);
export const $errors = $error.map((x) => Object.entries(Object(x?.errors)));

export const selectors = {
  useSignInRequestPending: () => useStore(signInFx.pending),
  useHasError: () => useStore($hasError),
  useErrors: () => useStore($errors),
};
