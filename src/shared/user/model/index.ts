import { createEvent, createStore } from 'effector-root';
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

$token.watch((token) => {
  setToken(token);
});

persist({
  store: $token,
  key: TOKEN_NAME,
});

export const $isAuthorized = $token.map(Boolean);
