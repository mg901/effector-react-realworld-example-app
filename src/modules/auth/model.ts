import { createStore, sample, forward, combine, restore } from 'effector';
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

export const $token = restore<Token>(fxGetTokenFromLoSt.doneData, null);
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

$authorizedUser
  .on(textChanged, (state, payload) => ({ ...state, ...payload }))
  .on(fxFetchUser.doneData, (state, { user }) => ({
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
  .on([fxSignIn.failData, fxSignUp.failData], (_, error) => error.errors)
  .reset(fxAuthDone);

loggedOut.watch(() => {
  fxRemveTokenFromLoSt();
  fxIntitNotAuthApp();
});
