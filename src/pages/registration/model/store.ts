import { createStore } from 'effector';
import { useStore, createGate } from 'effector-react';
import { history, ROUTES } from '@/shared/router';
import * as session from '@/entities/session';

session.signUpFx.done.watch(() => {
  history.push(ROUTES.root);
});

export const Gate = createGate();
export const $error = createStore<Record<string, unknown>>({
  errors: {},
})
  .on(session.signUpFx.failData, (_, payload) => payload)
  .reset(Gate.close);

export const $hasError = $error.map(
  (error) => Object.keys(Object(error)).length > 0,
);

export const $errors = $error.map((error) =>
  Object.entries(Object(error?.errors)),
);

export const selectors = {
  useSignUpLoading: () => useStore(session.signUpFx.pending),
  useHasError: () => useStore($hasError),
  useErrors: () => useStore($errors),
};
