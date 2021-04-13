import { createEffect, guard } from 'effector-root';
import { createGate } from 'effector-react';
import { api } from 'api';
import * as user from 'shared/user';

export const Gate = createGate();

export const fetchUserFx = createEffect<void, user.types.User>(() =>
  api.get('user').then(({ data }) => data.user),
);

user.model.$user.on(fetchUserFx.doneData, (_, payload) => payload);

guard({
  source: Gate.open,
  filter: user.model.$isAuthorized,
  target: fetchUserFx,
});
