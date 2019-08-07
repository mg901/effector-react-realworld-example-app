import { createEvent, createStore, createEffect, merge } from 'effector';
import * as api from '../api';
import { history } from '../models/router';

const changeText = createEvent();
export const asyncSignIn = createEffect().use(({ email, password }) =>
  api.auth.signIn(email, password),
);

export const asyncSignUp = createEffect().use(({ name, email, password }) =>
  api.auth.signUp(name, email, password),
);

export const asyncGetUser = createEffect().use(api.auth.current);
export const authDone = merge([
  asyncSignIn.done,
  asyncSignUp.done,
  asyncGetUser.done,
]);

export const onChangeText = (key) => (e) =>
  changeText({ [key]: e.currentTarget.value });

export const $user = createStore({ name: '', email: '', password: '' }).on(
  changeText,
  (state, payload) => ({ ...state, ...payload }),
);

asyncSignUp.use(({ name, email, password }) =>
  api.auth.signUp(name, email, password),
);

authDone.watch(() => {
  history.push('/');
});
