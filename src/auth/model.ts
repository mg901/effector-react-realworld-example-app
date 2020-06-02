import { createEvent, createStore } from 'effector';
import withStorage from 'effector-storage';
import { Token, AuthorizedUser, AuthFail } from './types';

export const loggedOutClicked = createEvent();

const createStorageStore = withStorage(createStore);
export const $token = createStorageStore<Token>(null, { key: 'jwt' });

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

export const $authFail = createStore<AuthFail>({ errors: [] });
