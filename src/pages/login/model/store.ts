import { createEffect, restore, forward } from 'effector';
import { useStore, createGate } from 'effector-react';
import * as visitor from '@/entities/visitor';
import { history } from '@/shared/router';
import * as api from './api';
import * as types from './types';

export const signInFx = createEffect<
  types.SignInPayload,
  visitor.types.Visitor,
  Record<string, unknown>
>(api.signIn);

export const navigateToRootFx = createEffect(() => {
  history.push('/');
});

visitor.$visitor.on(signInFx.doneData, (_, payload) => payload);

forward({
  from: signInFx.done,
  to: navigateToRootFx,
});

export const Gate = createGate();
export const $error = restore(signInFx.failData, {
  errors: {},
}).reset(Gate.close);

export const $hasError = $error.map((x) => Object.keys(Object(x)).length > 0);
export const $errors = $error.map((x) => Object.entries(Object(x?.errors)));

export const selectors = {
  useSignInRequestPending: () => useStore(signInFx.pending),
  useHasError: () => useStore($hasError),
  useErrors: () => useStore($errors),
};
