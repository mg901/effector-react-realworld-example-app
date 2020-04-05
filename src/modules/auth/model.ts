import { createStore, sample, merge, forward, combine } from 'effector';

import { textChanged, signIn, signUp, loggedOut } from './events';
import {
  fxSignUp,
  fxSignIn,
  fxFetchUser,
  fxGetTokenFromLoSt,
  fxRemveTokenFromLoSt,
  fxIntitNotAuthApp,
  fxAuthDone,
  fxSetTokenToLoST,
} from './effects';
import { Form, AuthorizedUser, Token } from './types';
import { ErrorList } from '../types';

export const $form = createStore<Form>({
  email: '',
  password: '',
  username: '',
});

export const $token = createStore<Token>(null);
export const $authorizedUser = createStore<AuthorizedUser>({
  bio: '',
  createdAt: '',
  email: '',
  id: null,
  image: '',
  token: null,
  updatedAt: '',
  username: '',
});

$form.on(textChanged, (state, payload) => ({ ...state, ...payload }));

sample({
  source: $form,
  clock: signIn,
  target: fxSignIn,
});

sample({
  source: $form,
  clock: signUp,
  target: fxSignUp,
});

forward({
  from: [fxSignIn.doneData, fxSignUp.doneData],
  to: fxSetTokenToLoST,
});

$token.on(fxGetTokenFromLoSt.done, (_, { result }) => result);

$authorizedUser
  .on(textChanged, (state, payload) => ({ ...state, ...payload }))
  .on(fxFetchUser.done, (state, { result: { user } }) => ({
    ...state,
    ...user,
  }))
  .reset(loggedOut);

export const $loading = combine(
  fxSignIn.pending,
  fxSignUp.pending,
  (login, registration) => login || registration,
);

export const $errors = createStore<ErrorList>({})
  .on(merge([fxSignIn.fail, fxSignUp.fail]), (_, { error }) => error.errors)
  .reset(fxAuthDone);

loggedOut.watch(() => {
  fxRemveTokenFromLoSt();
  fxIntitNotAuthApp();
});
