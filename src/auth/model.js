import { createEvent, createStore, createEffect, merge } from 'effector';
import { get, post } from '../request';
import { history } from '../models/router';

const changeText = createEvent();
export const signIn = createEffect().use(({ email, password }) => {
  console.log('email', email, 'password', password);

  return post('/users/login', { user: { email, password } });
});

export const signUp = createEffect().use(({ name, email, password }) =>
  post('/users', { user: { name, email, password } }),
);

export const getUser = createEffect().use(() => get('/user', {}));
export const authDone = merge([signIn.done, signUp.done, getUser.done]);

export const onChangeText = (key) => (e) =>
  changeText({ [key]: e.currentTarget.value });

export const $user = createStore({ name: '', email: '', password: '' }).on(
  changeText,
  (state, payload) => ({ ...state, ...payload }),
);

export const $errors = createStore({})
  .on(merge([signIn.fail, signUp.fail]), (_, payload) => {
    console.log('payload', payload);

    return JSON.parse(payload.error.response.text).errors;
  })
  .reset(authDone);

authDone.watch(() => {
  history.push('/');
});
