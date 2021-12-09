import {
  createEffect,
  createEvent,
  createStore,
  forward,
  guard,
} from 'effector';
import { useStore } from 'effector-react';
import { persist } from 'effector-storage/local';
import { setToken } from 'shared/api';
import { TOKEN_NAME } from 'shared/constants';
import { Token, Visitor } from './types';

export const loggedOutClicked = createEvent<React.MouseEvent>();

export const $visitor = createStore<Visitor>({
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
  $visitor.map((visitor) => visitor.token),
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

export const selectors = {
  useIsAuthorized: () => useStore($isAuthorized),
  useVisitor: () => useStore($visitor),
};
