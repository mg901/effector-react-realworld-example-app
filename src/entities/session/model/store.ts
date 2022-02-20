import {
  attach,
  createEvent,
  createEffect,
  createStore,
  sample,
} from 'effector';
import { useStore } from 'effector-react';
import { persist } from 'effector-storage/local';
import * as api from './api';
import * as types from './types';

export const set = createEvent<types.Visitor>();
export const reset = createEvent();

export const signUpFx = createEffect<
  types.SignUpArgs,
  types.VisitorResponse,
  Record<string, unknown>
>(api.signUp);

export const signInFx = createEffect<
  types.SignInArgs,
  types.VisitorResponse,
  Record<string, unknown>
>(api.signIn);

export const $visitor = createStore<types.Visitor>({
  image: '',
  username: '',
  bio: '',
  email: '',
  id: null,
  token: null,
})
  .on(set, (_, payload) => payload)
  .reset(reset);

export const $username = $visitor.map((x) => x.username);
export const $image = $visitor.map((x) => x.image);
export const $token = $visitor.map((x) => x.token);
export const $isAuthorized = $token.map(Boolean);

persist({
  store: $visitor,
  key: 'session',
});

export const getVisitorFx = createEffect(api.getVisitor);

export const updateVisitorFx = attach({
  source: $token,
  effect: createEffect<
    types.UpdateVisitorFxArgs,
    types.VisitorResponse,
    Record<string, unknown>
  >(api.changeVisitor),
  mapParams: (params: types.UpdateVisitorFxArgs, token) => ({
    token,
    ...params,
  }),
});

sample({
  clock: [
    signInFx.doneData,
    signUpFx.doneData,
    getVisitorFx.doneData,
    updateVisitorFx.doneData,
  ],
  fn: (data) => data.user,
  target: set,
});

export const selectors = {
  useIsAuthorized: () => useStore($isAuthorized),
  useUsername: () => useStore($username),
  useImage: () => useStore($image),
  useVisitor: () => useStore($visitor),
};
