import { createEffect, sample, guard } from 'effector';
import * as user from 'entities/user';
import * as api from 'shared/api';

export const getUserFx = createEffect(() => {
  return api.get<{ user: user.types.User }>('user').then((x) => {
    return x.data.user;
  });
});

sample({
  clock: guard(user.model.$isAuthorized, { filter: Boolean }),
  target: getUserFx,
});

user.model.$user.on(getUserFx.doneData, (_, payload) => payload);
