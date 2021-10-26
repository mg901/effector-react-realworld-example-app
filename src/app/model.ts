import { createEffect, guard } from 'effector';
import { createGate } from 'effector-react';
import * as user from 'entities/user';
import * as api from 'shared/api';

export const getUserFx = createEffect(() => {
  return api.get<{ user: user.types.User }>('user').then((x) => {
    return x.data.user;
  });
});

export const Gate = createGate();

user.model.$user.on(getUserFx.doneData, (_, payload) => payload);

guard({
  clock: Gate.open,
  source: user.model.$isAuthorized,
  filter: Boolean,
  target: getUserFx,
});
