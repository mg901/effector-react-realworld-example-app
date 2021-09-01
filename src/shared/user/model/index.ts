import { createEvent, createStore, guard } from 'effector';
import { persist } from 'effector-storage/local';
import { setToken } from 'api';
import { TOKEN_NAME } from 'config';
import { Token, User } from './types';

export const loggedOutClicked = createEvent<React.MouseEvent>();

export const $user = createStore<User>({
  bio: '',
  createdAt: '',
  email: '',
  id: null,
  image: '',
  token: null,
  updatedAt: '',
  username: '',
}).reset(loggedOutClicked);

export const $token = createStore<Token>(null).on(
  $user,
  (_, { token }) => token,
);

guard({
  source: $token,
  filter: Boolean,
}).watch(setToken);

persist({
  store: $token,
  key: TOKEN_NAME,
});

export const $isAuthorized = $token.map(Boolean);
