import { createEffect } from 'effector';
import * as user from 'entities/user';
import * as api from 'shared/api';

export const getUserFx = createEffect<void, user.types.User>(() => {
  return api.get('user').then((x) => x.data.user);
});

user.model.$user.on(getUserFx.doneData, (_, payload) => payload);
