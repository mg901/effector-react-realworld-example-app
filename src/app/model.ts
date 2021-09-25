import { createEffect, guard } from 'effector';
import { createGate } from 'effector-react';
import * as user from 'entities/user';
import * as api from 'shared/api';

export const Gate = createGate();

export const getUserFx = createEffect<void, user.types.User>(() => {
  return api.get('user').then((x) => x.data.user);
});

user.model.$user.on(getUserFx.doneData, (_, payload) => payload);

guard({
  source: Gate.open,
  filter: user.model.$isAuthorized,
  target: getUserFx,
});
