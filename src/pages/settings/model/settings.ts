import { createEffect } from 'effector';
import * as user from 'entities/user';
import * as api from 'shared/api';
import { history } from 'shared/library/router';
import * as errorsList from 'widgets/error-list';
import { changeUserDataFxArgs } from './types';

export const changeUserDataFx = createEffect<
  changeUserDataFxArgs,
  api.types.ApiResponse<void>,
  api.types.ApiError
>((payload) => {
  return api.put('user', {
    user: payload,
  });
});

export const $user = user.model.$user.map((x) => ({
  image: x.image,
  username: x.username,
  bio: x.bio,
  email: x.email,
  password: '',
}));

changeUserDataFx.done.watch(() => {
  window.location.reload();
});

user.model.loggedOutClicked.watch(() => {
  history.push('/');
});

errorsList.model.$errors.on(
  changeUserDataFx.failData,
  (_, error) => error.response?.data,
);
