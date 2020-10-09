import { createEvent, createStore } from 'effector-root';
import withStorage from 'effector-storage';
import { TOKEN_NAME } from '../../../config';
import { Token, User } from './types';

export const loggedOutClicked = createEvent<React.MouseEvent>();
const createStorageStore = withStorage(createStore);

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

export const $token = createStorageStore<Token>(null, { key: TOKEN_NAME })
  .catch(console.error)
  .on($user, (_, { token }) => token);
export const $isAuthorized = $token.map(Boolean);
