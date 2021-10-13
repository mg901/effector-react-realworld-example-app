import { createEffect } from 'effector';
import * as user from 'entities/user';
import * as api from 'shared/api';

export const getUserFx = createEffect(() => {
  return api.get<{ user: user.types.User }>('user').then((x) => {
    return x.data.user;
  });
});

user.model.$user.on(getUserFx.doneData, (_, payload) => payload);
