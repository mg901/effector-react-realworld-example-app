import { createEvent, createStore } from 'effector';
import withStorage from 'effector-storage';
import { TOKEN_NAME } from 'config';
import { Token, AuthorizedUser, AuthFail } from './types';

export const loggedOutClicked = createEvent();

const createStorageStore = withStorage(createStore);

export const $authorizedUser = createStore<AuthorizedUser>({
  bio: '',
  createdAt: '',
  email: '',
  id: null,
  image: '',
  token: null,
  updatedAt: '',
  username: '',
});

export const $token = createStorageStore<Token>(null, { key: TOKEN_NAME });
export const $isAuthorized = $token.map(Boolean);
export const $authFail = createStore<AuthFail>({ errors: [] });
