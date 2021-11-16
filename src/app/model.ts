import { createEffect, guard } from 'effector';
import { createGate } from 'effector-react';
import * as visitor from 'entities/visitor';
import * as api from 'shared/api';

export const getUserFx = createEffect(() => {
  return api.get<{ user: visitor.types.Visitor }>('user').then((response) => {
    return response.data.user;
  });
});

export const Gate = createGate();

visitor.model.$visitor.on(getUserFx.doneData, (_, payload) => payload);

guard({
  clock: Gate.open,
  source: visitor.model.$isAuthorized,
  filter: Boolean,
  target: getUserFx,
});
