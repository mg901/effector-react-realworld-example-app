import { createStore } from 'effector';
import { useStore, createGate } from 'effector-react';
import { history, ROUTES } from '@/shared/router';
import * as session from '@/entities/session';

session.signInFx.done.watch(() => {
  history.push(ROUTES.root);
});

export const Gate = createGate();
export const $error = createStore<Record<string, unknown>>({
  errors: {},
})
  .on(session.signInFx.failData, (_, payload) => payload)
  .reset(Gate.close);

export const $hasError = $error.map((x) => Object.keys(Object(x)).length > 0);
export const $errors = $error.map((x) => Object.entries(Object(x?.errors)));

export const selectors = {
  useSignInLoading: () => useStore(session.signInFx.pending),
  useHasError: () => useStore($hasError),
  useErrors: () => useStore($errors),
};
