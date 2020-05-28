import { createStore } from 'effector';
import { Token, AuthorizedUser, ResponseFail } from './types';

export const $token = createStore<Token>(null);
export const $$isAuthenticated = $token.map(Boolean);

$$isAuthenticated.watch((x) => console.log('is auth', x));

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

export const $responseFail = createStore<ResponseFail>({ errors: [] });
