import { createEvent, createEffect, merge } from 'effector';
import { userFeed, globalFeed } from '../posts/model';
import { getTags } from '../tags/model';
import { get, post } from '../request';

export const changeText = createEvent();
export const signIn = createEvent();
export const signUp = createEvent();
export const logOut = createEvent();

export const onChangeText = changeText.prepend((e) => ({
  [e.currentTarget.name]: e.currentTarget.value,
}));

export const initAuthApp = createEffect().use(() =>
  Promise.all([userFeed(), getTags()]),
);

export const intitNotAuthApp = createEffect().use(() =>
  Promise.all([globalFeed(), getTags()]),
);

export const asyncSignIn = createEffect().use(({ email, password }) =>
  post('/users/login', { user: { email, password } }),
);

export const asyncSignUp = createEffect().use(({ name, email, password }) =>
  post('/users', { user: { name, email, password } }),
);

export const getUser = createEffect().use(() => get('/user'));

export const authDone = merge([
  asyncSignIn.done,
  asyncSignUp.done,
  getUser.done,
]);
