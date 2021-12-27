import { createEffect, guard } from 'effector';
import { createGate } from 'effector-react';
import * as visitor from 'entities/visitor';
import * as http from 'shared/http';

export const getUserFx = createEffect(() => {
  return http
    .get<{ user: visitor.types.Visitor }>('user')
    .then((response) => response.data.user);
});

export const Gate = createGate();

visitor.$visitor.on(getUserFx.doneData, (_, payload) => payload);

guard({
  clock: Gate.open,
  source: visitor.$isAuthorized,
  filter: Boolean,
  target: getUserFx,
});
