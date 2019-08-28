import { createEvent, createEffect, merge } from 'effector';
import { TOKEN_NAME } from '../constants';
import { get, post } from '../request';

import { getUserFeed, getGlobalFeed } from '../feed/model.events';
import { getTags } from '../tags/model';

export const changeText = createEvent();
export const signIn = createEvent();
export const signUp = createEvent();
export const logOut = createEvent();

export const setToken = createEffect().use((token) =>
  localStorage.setItem(TOKEN_NAME, token),
);

export const getToken = createEffect().use(() =>
  localStorage.getItem(TOKEN_NAME),
);

export const removeToken = createEffect().use(() =>
  localStorage.removeItem(TOKEN_NAME),
);

export const onChangeText = changeText.prepend((e) => ({
  [e.currentTarget.name]: e.currentTarget.value,
}));

export const asyncSignIn = createEffect().use(({ email, password }) =>
  post('/users/login', { user: { email, password } }),
);

export const asyncSignUp = createEffect().use(({ name, email, password }) =>
  post('/users', { user: { name, email, password } }),
);

export const getUser = createEffect().use(() => get('/user'));

export const initAuthApp = createEffect().use(() =>
  Promise.all([getUser(), getUserFeed(), getTags()]),
);

export const intitNotAuthApp = createEffect().use(() =>
  Promise.all([getGlobalFeed(), getTags()]),
);

export const authDone = merge([
  asyncSignIn.done,
  asyncSignUp.done,
  getUser.done,
]);
