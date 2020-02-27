import {
  createStore, sample, merge, forward, combine,
} from 'effector';
import {
  Form, User, Token, Errors,
} from './types';
import {
  textChanged, signIn, signUp, loggedOut,
} from './events';
import {
  fxSignUp,
  fxSignIn,
  fxFetchUser,
  fxGetTokenFromLoSt,
  fxAuthDone,
  fxSetTokenToLoST,
} from './effects';

export const $form = createStore<Form>({
  email: '',
  password: '',
  username: '',
});

export const $token = createStore<Token>(null);

export const $authUser = createStore<User>({
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
  from: merge([fxSignIn.doneData, fxSignUp.doneData]),
  to: fxSetTokenToLoST,
});

$token.on(fxGetTokenFromLoSt.done, (_, { result }) => result);

$authUser
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

export const $errors = createStore<Errors>({})
  .on(merge([fxSignIn.fail, fxSignUp.fail]), (_, { error }) => error.errors)
  .reset(fxAuthDone);
