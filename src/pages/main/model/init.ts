import { sample, forward } from 'effector';
import { Gate, fetchUserFx } from '.';
import { $isAuthorized, $user } from '../../../features/user';

forward({
  from: [sample($isAuthorized, Gate.open), $isAuthorized],
  to: fetchUserFx,
});

$user.on(fetchUserFx.doneData, (_, payload) => payload);
