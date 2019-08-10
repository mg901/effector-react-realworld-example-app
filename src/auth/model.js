import { createEvent, createStore, createEffect, merge } from 'effector';
import { get, post, put } from '../request';
import { history } from '../models/router';
import { TOKEN_NAME } from '../constants';

const changeText = createEvent();
export const logOut = createEvent();
export const signIn = createEffect().use(({ email, password }) =>
  post('/users/login', { user: { email, password } }),
);

export const signUp = createEffect().use(({ name, email, password }) =>
  post('/users', { user: { name, email, password } }),
);

export const getUser = createEffect().use(() => get('/user'));
export const authDone = merge([signIn.done, signUp.done, getUser.done]);

export const onChangeText = (key) => (e) =>
  changeText({ [key]: e.currentTarget.value });

export const $authorizedUser = createStore({
  image: '',
  username: '',
  bio: '',
  email: '',
  token: null,
})
  .on(changeText, (state, payload) => ({ ...state, ...payload }))
  .on(authDone, (state, { result }) => ({ ...state, ...result.user }))
  .reset(logOut);

export const $userProfile = createStore({
  name: '',
  email: '',
  password: '',
}).on(changeText, (state, payload) => ({ ...state, ...payload }));

export const $token = $authorizedUser.map(({ token }) => token);

$token.watch((token) => {
  if (token) {
    localStorage.setItem(TOKEN_NAME, token);
  }
});

export const $errors = createStore({})
  .on(
    merge([signIn.fail, signUp.fail]),
    (_, { error }) => JSON.parse(error.response.text).errors,
  )
  .reset(authDone);

authDone.watch(() => {
  history.push('/');
});

if (localStorage.getItem(TOKEN_NAME)) {
  getUser();
}

export const updateUserData = createEffect().use(({ password, ...fields }) =>
  put('/user', password ? { password, ...fields } : fields),
);

updateUserData.done.watch(() => {
  history.push('/');
});
