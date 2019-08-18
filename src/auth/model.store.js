import { createStore } from 'effector';

export const $errors = createStore({});

export const $form = createStore({
  name: '',
  email: '',
  password: '',
});

export const $authUser = createStore({
  image: '',
  username: '',
  bio: '',
  email: '',
  token: null,
});
