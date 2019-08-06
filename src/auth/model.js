import { restore, createEvent, createEffect, merge } from 'effector';
import * as api from '../api';
import { history } from '../models/router';
import { targetValue } from '../helpers';

export const changeEmail = createEvent();
export const changeName = createEvent();
export const changePassword = createEvent();

export const asyncSignIn = createEffect();
export const asyncSignUp = createEffect();
export const asyncGetUser = createEffect();

export const authDone = merge([
  asyncSignIn.done,
  asyncSignUp.done,
  asyncGetUser.done,
]);
export const authFail = merge([asyncSignIn.fail, asyncSignUp.fail]);

export const onChangeName = changeName.prepend(targetValue);
export const onChangeEmail = changeEmail.prepend(targetValue);
export const onChangePassword = changePassword.prepend(targetValue);

export const $name = restore(changeName, '');
export const $email = restore(changeEmail, '');
export const $password = restore(changePassword, '');

asyncGetUser.use(() => api.auth.current());

asyncSignIn.use(({ email, password }) => api.auth.signIn(email, password));

asyncSignUp.use(({ name, email, password }) =>
  api.auth.signUp(name, email, password),
);

authDone.watch(() => {
  history.push('/');
});
