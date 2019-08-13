import { merge, sample } from 'effector';
import { history } from '../models/router';
import { TOKEN_NAME } from '../constants';
import {
  asyncSignIn,
  asyncSignUp,
  changeText,
  signIn,
  signUp,
  authDone,
  logOut,
  getUser,
} from './model.events';
import { form, errors, authUser } from './model.store';

form.on(changeText, (state, payload) => ({ ...state, ...payload }));

sample({
  source: form,
  clock: signUp,
  target: asyncSignUp,
  fn: (user) => user,
});

sample({
  source: form,
  target: asyncSignIn,
  clock: signIn,
  fn: (user) => user,
});

errors
  .on(
    merge([asyncSignIn.fail, asyncSignUp.fail]),
    (_, { error }) => JSON.parse(error.response.text).errors,
  )
  .reset(authDone);

authDone.watch(() => {
  history.push('/');
});

authUser
  .on(changeText, (state, payload) => ({ ...state, ...payload }))
  .on(authDone, (state, { result }) => ({ ...state, ...result.user }))
  .reset(logOut);

export const token = authUser.map((user) => user.token);

token.watch((x) => {
  if (x) {
    localStorage.setItem(TOKEN_NAME, x);
  }
});

authDone.watch(() => {
  history.push('/');
});

if (localStorage.getItem(TOKEN_NAME)) {
  getUser();
}

logOut.watch(() => {
  history.push('/');
  localStorage.removeItem(TOKEN_NAME);
});
