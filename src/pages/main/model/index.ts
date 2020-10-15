import { createEffect, guard, forward } from 'effector-root';
import { createGate } from 'effector-react';
import { request } from 'api';
import * as user from 'modules/user';

export const Gate = createGate();

export const fetchUserFx = createEffect<void, user.types.User>(async () => {
  const { data } = await request.get('user');

  return data.user;
});

user.model.$user.on(fetchUserFx.doneData, (_, payload) => payload);

forward({
  from: [
    guard(Gate.open, {
      filter: user.model.$isAuthorized,
    }),
    guard(user.model.$isAuthorized, {
      filter: Boolean,
    }),
  ],
  to: fetchUserFx,
});
