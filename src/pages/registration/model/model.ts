import { createEffect } from 'effector';
import * as user from 'entities/user';
import * as api from 'shared/api';
import * as router from 'shared/library/router';
import * as errorsList from 'widgets/error-list';

type Form = {
  username: string;
  email: string;
  password: string;
};

export const signUpFx = createEffect<Form, user.types.User, api.types.ApiError>(
  ({ username, email, password }) => {
    return api
      .post('users', {
        user: { username, email, password },
      })
      .then((x) => x.data.user);
  },
);

signUpFx.done.watch(() => {
  router.history.push('/');
});

user.model.$user.on(signUpFx.doneData, (_, payload) => payload);

errorsList.model.$errors.on(
  signUpFx.failData,
  (_, error) => error.response?.data,
);
