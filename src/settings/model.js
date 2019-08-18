import { createEvent, createEffect, restore, sample, combine } from 'effector';
import { put } from '../request';
import { history } from '../models/router';
import { $authUser } from '../auth/model.store';

export const changePassword = createEvent();
export const submitForm = createEvent();
export const updateUser = createEffect().use((user) => put('/user', { user }));

export const newPassword = restore(changePassword, '');

const updatedUser = combine($authUser, newPassword, (user, password) => ({
  ...user,
  password,
}));

sample({
  source: updatedUser,
  target: updateUser,
  clock: submitForm,
  fn: ({ password, ...fields }) =>
    password ? { password, ...fields } : fields,
});

updateUser.done.watch(() => {
  history.push('/');
});
