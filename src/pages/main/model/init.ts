import { sample, forward } from 'effector';
import { Gate, fetchUserFx } from '.';
import { model } from '../../../app';

forward({
  from: [sample(model.$isAuthorized, Gate.open), model.$isAuthorized],
  to: fetchUserFx,
});

model.$user.on(fetchUserFx.doneData, (_, payload) => payload);
