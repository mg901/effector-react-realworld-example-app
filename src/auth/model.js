import { merge, sample } from 'effector';
import { history } from '../router';
import { TOKEN_NAME, TOKEN_FROM_STORAGE } from '../constants';
import { intitNotAuthApp } from '../app/model';
import {
  asyncSignIn,
  asyncSignUp,
  changeText,
  signIn,
  signUp,
  authDone,
  logOut,
} from './model.events';
import { $form, $errors, $authUser } from './model.store';

$form.on(changeText, (state, payload) => ({ ...state, ...payload }));

sample({
  source: $form,
  clock: signUp,
  target: asyncSignUp,
  fn: (user) => user,
});

sample({
  source: $form,
  target: asyncSignIn,
  clock: signIn,
  fn: (user) => user,
});

$errors
  .on(
    merge([asyncSignIn.fail, asyncSignUp.fail]),
    (_, { error }) => JSON.parse(error.response.text).errors,
  )
  .reset(authDone);

authDone.watch(() => {
  history.push('/');
});

$authUser
  .on(changeText, (state, payload) => ({ ...state, ...payload }))
  .on(authDone, (state, { result }) => ({ ...state, ...result.user }))
  .reset(logOut);

export const $token = $authUser.map((user) => user.token || TOKEN_FROM_STORAGE);

$token.watch((x) => {
  if (x) {
    localStorage.setItem(TOKEN_NAME, x);
  }
});

authDone.watch(() => {
  history.push('/');
});

logOut.watch(() => {
  history.push('/');
  localStorage.removeItem(TOKEN_NAME);
  intitNotAuthApp();
});
