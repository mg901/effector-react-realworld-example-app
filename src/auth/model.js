import { createStore, merge, sample } from 'effector';
import { changeText, onSignIn, onSignUp, onLogOut } from './model.events';
import {
  signIn,
  signUp,
  getToken,
  setToken,
  removeToken,
  initAuthApp,
  intitNotAuthApp,
  authDone,
} from './mode.effects';

export const $form = createStore({
  name: '',
  email: '',
  password: '',
}).on(changeText, (state, payload) => ({ ...state, ...payload }));

sample({
  source: $form,
  clock: onSignUp,
  target: signUp,
});

sample({
  source: $form,
  target: signIn,
  clock: onSignIn,
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
  .reset(onLogOut);

$authUser.watch(({ token }) => token && setToken(token));

export const $token = createStore(null)
  .on($authUser, (_, { token }) => token)
  .on(getToken.done, (_, { result }) => result);

onLogOut.watch(() => {
  removeToken();
  intitNotAuthApp();
});

export const $errors = createStore({})
  .on(
    merge([signIn.fail, signUp.fail]),
    (_, { error }) => JSON.parse(error.response.text).errors,
  )
  .reset(authDone);

getToken.done.watch(({ result }) =>
  result ? initAuthApp() : intitNotAuthApp(),
);
