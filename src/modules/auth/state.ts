import { createStore } from 'effector';
import { Token, AuthorizedUser, ResponseFail } from './types';

export const $token = createStore<Token>(null);
export const $isAuthorized = $token.map(Boolean);

export const $authUser = createStore<AuthorizedUser>({
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
export const $errors = $responseFail.map((x) => x.errors);
