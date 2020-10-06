import { createDomain } from 'effector';
import withStorage from 'effector-storage';
import { TOKEN_NAME } from '../../../config';
import { Token, User } from './types';

export const domain = createDomain();

export const loggedOutClicked = domain.createEvent<React.MouseEvent>();
const createStorageStore = withStorage(domain.createStore);

export const $user = domain.createStore<User>({
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
