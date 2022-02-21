import { createEvent, sample } from 'effector';
import * as session from '@/entities/session';
import * as user from '@/entities/user';

export const submitForm = createEvent<user.types.UpdateUserArgs>();

export const $editableFields = session.store.$session.map((x) => ({
  image: x.image,
  username: x.username,
  bio: x.bio,
  email: x.email,
  password: '',
}));

sample({
  clock: submitForm,
  target: user.store.updateUserFx,
});

sample({
  clock: user.store.updateUserFx.done,
  target: user.store.resetError,
});
