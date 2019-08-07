import { createStore, merge } from 'effector';
import { authDone, asyncSignIn, asyncSignUp } from '../auth/model';

export const $appName = createStore('Conduit');
export const $viewChangeCounter = createStore(0);
export const $errors = createStore({});

$errors
  .on(
    merge([asyncSignIn.fail, asyncSignUp.fail]),
    (_, { error }) => JSON.parse(error.response.text).errors,
  )
  .reset(authDone);
