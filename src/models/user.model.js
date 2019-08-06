import { createEvent, createEffect, createStore } from 'effector';
import { TOKEN_NAME } from '../constants';
import { authDone } from '../auth/model';
import * as api from '../api';
import { history } from './router.model';

const changeText = createEvent();
export const logOut = createEvent();
export const asyncUpdateUserData = createEffect();

export const onChangeText = (key) => (e) =>
  changeText({ [key]: e.target.value });

export const $currentUser = createStore({
  image: '',
  username: '',
  bio: '',
  email: '',
  token: null,
});

$currentUser
  .on(changeText, (state, payload) => ({ ...state, ...payload }))
  .on(authDone, (state, { result }) => ({ ...state, ...result.user }))
  .reset(logOut);

export const $token = $currentUser.map(({ token }) => token);

$token.watch((token) => {
  if (token) {
    localStorage.setItem(TOKEN_NAME, token);
  }
});

logOut.watch(() => {
  localStorage.removeItem(TOKEN_NAME);
  history.push('/');
});

asyncUpdateUserData.use(({ password, ...fields }) =>
  api.auth.save(password ? { password, ...fields } : fields),
);

asyncUpdateUserData.done.watch(() => {
  history.push('/');
});
