import { createDomain, guard } from 'effector';
import { persist } from 'effector-storage/local';
import { setToken } from 'shared/api';
import { TOKEN_NAME } from 'shared/config';
import { Token, User } from './types';

export const userDomain = createDomain('user');

export const loggedOutClicked = userDomain.createEvent<React.MouseEvent>();

export const $user = userDomain
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

export const $token = userDomain
  .createStore<Token>(null)
  .on($user, (_, { token }) => token);

guard({
  source: $token,
  filter: Boolean,
}).watch(setToken);

persist({
  store: $token,
  key: TOKEN_NAME,
});

export const $isAuthorized = $token.map(Boolean);
