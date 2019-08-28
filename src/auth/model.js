import { createStore, merge, sample } from 'effector';
import {
  asyncSignIn,
  asyncSignUp,
  changeText,
  signIn,
  signUp,
  authDone,
  logOut,
  getToken,
  setToken,
  removeToken,
  initAuthApp,
  intitNotAuthApp,
} from './model.events';

export const $form = createStore({
  name: '',
  email: '',
  password: '',
}).on(changeText, (state, payload) => ({ ...state, ...payload }));

sample({
  source: $form,
  clock: signUp,
  target: asyncSignUp,
});

sample({
  source: $form,
  target: asyncSignIn,
  clock: signIn,
});

export const $authUser = createStore({
  image: '',
  username: '',
  bio: '',
  email: '',
  token: null,
})
  .on(changeText, (state, payload) => ({ ...state, ...payload }))
  .on(authDone, (state, { result }) => ({ ...state, ...result.user }))
  .reset(logOut);

$authUser.watch(({ token }) => token && setToken(token));

export const $token = createStore(null)
  .on($authUser, (_, { token }) => token)
  .on(getToken.done, (_, { result }) => result);

logOut.watch(() => {
  removeToken();
  intitNotAuthApp();
});

export const $errors = createStore({})
  .on(
    merge([asyncSignIn.fail, asyncSignUp.fail]),
    (_, { error }) => JSON.parse(error.response.text).errors,
  )
  .reset(authDone);

getToken.done.watch(({ result }) =>
  result ? initAuthApp() : intitNotAuthApp(),
);
