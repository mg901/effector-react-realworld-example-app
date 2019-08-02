import { restore, createEvent, createEffect, merge, combine } from 'effector';
import { auth } from '../agent';
import { $errors } from '../app/model.store';

const eventValue = (e) => e.currentTarget.value;

export const changeEmail = createEvent();
export const changeUserName = createEvent();
export const changePassword = createEvent();
export const asyncSignIn = createEffect();
export const asyncSignUp = createEffect();
export const noAuth = merge([asyncSignIn.fail, asyncSignUp.fail]);

export const $username = restore(changeUserName, '');
export const $email = restore(changeEmail, '');
export const $password = restore(changePassword, '');
export const $fields = combine([$username, $email, $password]);

export const onChangeUserName = changeUserName.prepend(eventValue);
export const onChangeEmail = changeEmail.prepend(eventValue);
export const onChangePassword = changePassword.prepend(eventValue);

asyncSignIn.use(({ email, password }) => auth.signIn(email, password));

asyncSignUp.use(({ username, email, password }) =>
  auth.signUp(username, email, password),
);

$errors.on(noAuth, (_, { error }) => JSON.parse(error.response.text).errors);
