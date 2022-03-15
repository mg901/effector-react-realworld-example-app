import { createEvent, createEffect, createStore, sample } from 'effector';
import { persist } from 'effector-storage/local';
import * as user from '@/entities/user';
import * as api from '../api';
import * as types from '../types';

export const setSession = createEvent<user.types.User>();
export const resetSession = createEvent();

export const signInFx = createEffect<
  types.SignInArgs,
  { user: user.types.User },
  types.SessionError
>(api.signIn);

export const signUpFx = createEffect<
  types.SignUpArgs,
  { user: user.types.User },
  types.SessionError
>(api.signUp);

export const $session = createStore<user.types.User>({
  image: '',
  username: '',
  bio: '',
  email: '',
  id: null,
  token: null,
})
  .on(setSession, (_, payload) => payload)
  .reset(resetSession);

export const $username = $session.map((x) => x.username);
export const $image = $session.map((x) => x.image);
export const $token = $session.map((x) => x.token);
export const $isAuthorized = $token.map(Boolean);

persist({
  store: $session,
  key: 'session',
});

sample({
  clock: [signInFx.doneData, signUpFx.doneData],
  fn: (data) => data.user,
  target: setSession,
});

export const resetError = createEvent();
export const $error = createStore<types.FailData | null>(null)
  .on([signInFx.failData, signUpFx.failData], (_, error) => error.data)
  .reset(resetError);

export const $errorList = $error.map((error) =>
  Object.entries(Object(error?.errors)),
);
