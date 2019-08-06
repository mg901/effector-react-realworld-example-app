import { createEvent, createStore, createEffect, merge } from 'effector';
import * as api from '../api';
import { history } from '../models/router';

const changeText = createEvent();
export const asyncSignIn = createEffect();
export const asyncSignUp = createEffect();
export const asyncGetUser = createEffect();
export const authFail = merge([asyncSignIn.fail, asyncSignUp.fail]);
export const authDone = merge([
  asyncSignIn.done,
  asyncSignUp.done,
  asyncGetUser.done,
]);

export const onChangeText = (key) => (e) =>
  changeText({ [key]: e.currentTarget.value });

export const $user = createStore({ name: '', email: '', password: '' });

$user.on(changeText, (state, payload) => ({ ...state, ...payload }));

asyncGetUser.use(api.auth.current);

asyncSignIn.use(({ email, password }) => api.auth.signIn(email, password));

asyncSignUp.use(({ name, email, password }) =>
  api.auth.signUp(name, email, password),
);

authDone.watch(() => {
  history.push('/');
});
