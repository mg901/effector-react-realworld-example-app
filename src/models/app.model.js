import { createStore } from 'effector';
import { authFail, authDone } from '../auth/model';

export const $appName = createStore('Conduit');
export const $viewChangeCounter = createStore(0);
export const $errors = createStore({});

$errors
  .on(authFail, (_, { error }) => JSON.parse(error.response.text).errors)
  .reset(authDone);
