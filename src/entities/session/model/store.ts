import {
  createEffect,
  createEvent,
  createStore,
  guard,
  sample,
} from 'effector';
import { useStore } from 'effector-react';
import { persist } from 'effector-storage/local';
import * as http from '@/shared/http';
import * as api from './api';
import * as types from './types';

export const setSession = createEvent<types.Visitor>();
export const resetSession = createEvent();

export const signInFx = createEffect<
  types.SignInArgs,
  types.VisitorResponse,
  Record<string, unknown>
>(api.signIn);

export const signUpFx = createEffect<
  types.SignUpArgs,
  types.VisitorResponse,
  Record<string, unknown>
>(api.signUp);

export const getVisitorFx = createEffect(api.getVisitor);

export const updateVisitorFx = createEffect<
  types.UpdateVisitorFxArgs,
  types.VisitorResponse,
  Record<string, unknown>
>(api.changeVisitor);

sample({
  clock: [
    signInFx.doneData,
    signUpFx.doneData,
    getVisitorFx.doneData,
    updateVisitorFx.doneData,
  ],
  fn: (data) => data.user,
  target: setSession,
});

sample({
  clock: [signInFx.fail, signUpFx.fail, getVisitorFx.fail],
  target: resetSession,
});

export const $visitor = createStore<types.Visitor>({
  image: '',
  username: '',
  bio: '',
  email: '',
  id: null,
  token: null,
})
  .on(setSession, (_, payload) => payload)
  .reset(resetSession);

export const $username = $visitor.map((x) => x.username);
export const $image = $visitor.map((x) => x.image);
export const $token = $visitor.map((x) => x.token);
export const $isAuthorized = $token.map(Boolean);

persist({
  store: $visitor,
  key: 'session',
});

guard({
  source: $token,
  filter: Boolean,
}).watch(http.setToken);

export const selectors = {
  useIsAuthorized: () => useStore($isAuthorized),
  useUsername: () => useStore($username),
  useImage: () => useStore($image),
  useVisitor: () => useStore($visitor),
};
