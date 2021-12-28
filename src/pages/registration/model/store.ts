import { createEffect, restore, forward } from 'effector';
import { useStore, createGate } from 'effector-react';
import * as visitor from '@/entities/visitor';
import * as router from '@/shared/router';
import * as api from './api';
import * as types from './types';

export const signUpFx = createEffect<
  types.FormValues,
  visitor.types.Visitor,
  Record<string, unknown>
>(api.signUp);

export const navigateToRootFx = createEffect(() => {
  router.history.push('/');
});

visitor.$visitor.on(signUpFx.doneData, (_, payload) => payload);

forward({
  from: signUpFx.done,
  to: navigateToRootFx,
});

export const Gate = createGate();
export const $error = restore(signUpFx.failData, {
  errors: {},
});

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
