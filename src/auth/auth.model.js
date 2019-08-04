import { restore, createEvent, createEffect, merge, combine } from 'effector';
import { auth } from '../agent';

const targetValue = (e) => e.currentTarget.value;

export const changeEmail = createEvent();
export const changeUserName = createEvent();
export const changePassword = createEvent();
export const asyncSignIn = createEffect();
export const asyncSignUp = createEffect();
export const authDone = merge([asyncSignIn.done, asyncSignUp.done]);
export const authFail = merge([asyncSignIn.fail, asyncSignUp.fail]);

export const onChangeUserName = changeUserName.prepend(targetValue);
export const onChangeEmail = changeEmail.prepend(targetValue);
export const onChangePassword = changePassword.prepend(targetValue);

export const $username = restore(changeUserName, '');
export const $email = restore(changeEmail, '');
export const $password = restore(changePassword, '');
export const $fields = combine([$username, $email, $password]);

asyncSignIn.use(({ email, password }) => auth.signIn(email, password));

asyncSignUp.use(({ username, email, password }) =>
  auth.signUp(username, email, password),
);
