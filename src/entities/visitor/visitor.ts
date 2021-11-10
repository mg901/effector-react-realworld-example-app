import {
  createEffect,
  createEvent,
  createStore,
  forward,
  guard,
} from 'effector';
import { persist } from 'effector-storage/local';
import { setToken } from 'shared/api';
import { TOKEN_NAME } from 'shared/constants';
import { Token, User } from './types';

export const loggedOutClicked = createEvent<React.MouseEvent>();

export const $visitor = createStore<User>({
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
  $visitor.map((x) => x.token),
  (_, payload) => payload,
);

forward({
  from: guard({ source: $token, filter: Boolean }),
  to: createEffect(setToken),
});

persist({
  store: $token,
  key: TOKEN_NAME,
});

export const $isAuthorized = $token.map(Boolean);
