import { createEffect, guard } from 'effector';
import { createGate } from 'effector-react';
import * as user from 'entities/user';
import * as api from 'shared/api';

export const Gate = createGate();

export const fetchUserFx = createEffect<void, user.types.User>(() => {
  return api.get('user').then(({ data }) => data.user);
});

user.model.$user.on(fetchUserFx.doneData, (_, payload) => payload);

guard({
  source: Gate.open,
  filter: user.model.$isAuthorized,
  target: fetchUserFx,
});
