import {
  createEvent,
  createEffect,
  restore,
  createStoreObject,
} from 'effector';
import { auth } from '../agent';
import { $errors } from '../app/store';

export const changeEmail = createEvent();
export const changeUserName = createEvent();
export const changePassword = createEvent();
export const asyncSignIn = createEffect();
export const asyncSignUp = createEffect();

export const $username = restore(changeUserName, '');
export const $email = restore(changeEmail, '');
export const $password = restore(changePassword, '');
export const $fields = createStoreObject({ $username, $email, $password });

$errors
  .on(
    asyncSignIn.fail,
    (_, { error }) => JSON.parse(error.response.text).errors,
  )
  .on(
    asyncSignUp.fail,
    (_, { error }) => JSON.parse(error.response.text).errors,
  );

asyncSignIn.use((email, password) => auth.signIn(email, password));

asyncSignUp.use((username, email, password) =>
  auth.signUp(username, email, password),
);
