import { createEffect, merge } from 'effector';
import { TOKEN_NAME } from '../constants';
import { get, post } from '../request';

import { fetchUserFeed, fetchGlobalFeed } from '../feed/model.events';
import { getTags } from '../tags/model';

export const setToken = createEffect().use((token) =>
  localStorage.setItem(TOKEN_NAME, token),
);

export const getToken = createEffect().use(() =>
  localStorage.getItem(TOKEN_NAME),
);

export const removeToken = createEffect().use(() =>
  localStorage.removeItem(TOKEN_NAME),
);

export const signIn = createEffect().use(({ email, password }) =>
  post('/users/login', { user: { email, password } }),
);

export const signUp = createEffect().use(({ name, email, password }) =>
  post('/users', { user: { name, email, password } }),
);

export const fetchUser = createEffect().use(() => get('/user'));

export const initAuthApp = createEffect().use(() =>
  Promise.all([fetchUser(), fetchUserFeed(), getTags()]),
);

export const intitNotAuthApp = createEffect().use(() =>
  Promise.all([fetchGlobalFeed(), getTags()]),
);

export const authDone = merge([signIn.done, signUp.done, fetchUser.done]);
