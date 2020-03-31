import { sample, restore } from 'effector';
import { $authorizedUser } from '../auth';
import { textChanged, fieldChanged, formSubmitted } from './events';
import { fxSubmitForm } from './effects';

export const $user = $authorizedUser.map(({ image, username, bio, email }) => ({
  image,
  username,
  bio,
  email,
}));

const $newPassword = restore(textChanged, '');

$user.on(fieldChanged, (state, payload) => ({
  ...state,
  ...payload,
}));

sample({
  source: {
    user: $user,
    password: $newPassword,
  },
  clock: formSubmitted,
  fn: ({ user, password }) => (password ? { ...user, password } : user),
  target: fxSubmitForm,
});
