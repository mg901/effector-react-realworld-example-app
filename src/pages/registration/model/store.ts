import { createEvent, createEffect, restore, forward } from 'effector';
import { useStore, createGate } from 'effector-react';
import * as visitor from '@/entities/visitor';
import { history, ROUTES } from '@/shared/router';
import * as api from './api';
import * as types from './types';

export const formSubmitted = createEvent<types.FormValues>();
export const signUpFx = createEffect<
  types.FormValues,
  visitor.types.Visitor,
  Record<string, unknown>
>(api.signUp);

visitor.$visitor.on(signUpFx.doneData, (_, payload) => payload);

forward({
  from: formSubmitted,
  to: signUpFx,
});

signUpFx.done.watch(() => {
  history.push(ROUTES.yourFeed);
});

export const Gate = createGate();
export const $error = restore(signUpFx.failData, {
  errors: {},
}).reset(Gate.close);

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
