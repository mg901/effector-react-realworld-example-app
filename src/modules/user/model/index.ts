import withStorage from 'effector-storage';
import { TOKEN_NAME } from '../../../config';
import { root } from '../../../root';
import { Token, User } from './types';

export const loggedOutClicked = root.createEvent<React.MouseEvent>();
const createStorageStore = withStorage(root.createStore);

export const $user = root
  .createStore<User>({
    bio: '',
    createdAt: '',
    email: '',
    id: null,
    image: '',
    token: null,
    updatedAt: '',
    username: '',
  })
  .reset(loggedOutClicked);

export const $token = createStorageStore<Token>(null, { key: TOKEN_NAME })
  .catch(console.error)
  .on($user, (_, { token }) => token);
export const $isAuthorized = $token.map(Boolean);
