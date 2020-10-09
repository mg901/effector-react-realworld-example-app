import { guard, forward } from 'effector';
import { Gate, fetchUserFx } from '.';
import { model } from '../../../modules/user';

forward({
  from: [
    guard({
      source: Gate.open,
      filter: model.$isAuthorized,
    }),
    model.$isAuthorized,
  ],
  to: fetchUserFx,
});

model.$user.on(fetchUserFx.doneData, (_, payload) => payload);
