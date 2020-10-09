import { guard, forward } from 'effector';
import { createGate } from 'effector-react';
import { request } from 'api';
import * as user from 'modules/user';
import { root } from '../../../root';

export const Gate = createGate();

export const fetchUserFx = root.createEffect(() =>
  request.get<{ user: user.types.User }>('user').then((x) => x.data.user),
);

user.model.$user.on(fetchUserFx.doneData, (_, payload) => payload);

forward({
  from: [
    guard({
      source: Gate.open,
      filter: user.model.$isAuthorized,
    }),
    user.model.$isAuthorized,
  ],
  to: fetchUserFx,
});
