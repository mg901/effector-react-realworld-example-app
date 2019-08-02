import {
  createEvent,
  createEffect,
  createStore,
  createStoreObject,
  restore,
  combine,
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
export const $currentUser = createStore({});
export const $token = $currentUser.map((user) => user.token);

$currentUser
  .on(asyncSignIn.done, (_, { result }) => result.user)
  .on(asyncSignUp.done, (_, payload) => {
    // console.log('payload', payload);

    return payload;
  });

asyncSignIn.use(({ email, password }) => auth.signIn(email, password));

asyncSignUp.use(({ username, email, password }) =>
  auth.signUp(username, email, password),
);

$errors
  .on(
    asyncSignIn.fail,
    (_, { error }) => JSON.parse(error.response.text).errors,
  )
  .on(
    asyncSignUp.fail,
    (_, { error }) => JSON.parse(error.response.text).errors,
  );
