import {
  createEvent,
  createEffect,
  createStore,
  forward,
  restore,
  combine,
} from 'effector';
import { TOKEN_NAME } from '../constants';
import { authDone } from '../auth/model';

import * as api from '../api';
import { targetValue, decompose } from '../helpers';
import { history } from './router.model';

export const logOut = createEvent();
const changeImageUrl = createEvent();
const changeName = createEvent();
const changeBio = createEvent();
const changeEmail = createEvent();
const changePassword = createEvent();

export const asyncUpdateUserData = createEffect();

export const onCahangeImageUrl = changeImageUrl.prepend(targetValue);
export const onChangeName = changeName.prepend(targetValue);
export const onChangeBio = changeBio.prepend(targetValue);
export const onChangeEmail = changeEmail.prepend(targetValue);
export const onChangePassword = changePassword.prepend(targetValue);

export const $currentUser = createStore({});
export const $token = $currentUser.map(({ token }) => token || null);
export const $password = restore(changePassword, '');

const { $image, $username, $bio, $email } = decompose($currentUser, {
  $image: ({ image }) => image || '',
  $username: ({ username }) => username,
  $bio: ({ bio }) => bio || '',
  $email: ({ email }) => email,
});

$currentUser.on(authDone, (_, { result }) => result.user).reset(logOut);

$token.watch((token) => {
  if (token) {
    localStorage.setItem(TOKEN_NAME, token);
  }
});

logOut.watch(() => {
  localStorage.removeItem(TOKEN_NAME);
  history.push('/');
});

forward({
  from: changeImageUrl,
  to: $image,
});

forward({
  from: changeName,
  to: $username,
});

forward({
  from: changeBio,
  to: $bio,
});

forward({
  from: changeEmail,
  to: $email,
});

export const $user = combine(
  $image,
  $username,
  $bio,
  $email,
  $password,
  (image, username, bio, email, password) =>
    password
      ? { image, username, bio, email, password }
      : { image, username, bio, email },
);

asyncUpdateUserData.use((user) => api.auth.save(user));

asyncUpdateUserData.done.watch(() => {
  history.push('/');
});
