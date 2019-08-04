import { createEvent, createStore } from 'effector';
import { authDone } from './auth.model';

const TOKEN_NAME = 'jwt';
export const logOut = createEvent();
export const $currentUser = createStore(null);
export const $token = $currentUser.map((user) => user && user.token);

$currentUser.on(authDone, (_, { result }) => result.user).reset(logOut);

$token.watch((token) => {
  if (token) {
    localStorage.setItem(TOKEN_NAME, token);
  }
});

logOut.watch(() => {
  localStorage.removeItem(TOKEN_NAME);
});
