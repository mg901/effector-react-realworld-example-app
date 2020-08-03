import { split, sample, forward, merge } from 'effector';
import { $$isAuthorized, $authorizedUser } from '../../auth';
import { RootGate, initAuthAppFx, intitNotAuthAppFx, getUserFx } from './model';

const { authenticated, notAuthenticated } = split(
  merge([sample($$isAuthorized, RootGate.open), $$isAuthorized.updates]),
  {
    authenticated: (is) => is === true,
    notAuthenticated: (is) => is === false,
  },
);

forward({
  from: authenticated,
  to: initAuthAppFx,
});

forward({
  from: notAuthenticated,
  to: intitNotAuthAppFx,
});

$authorizedUser.on(getUserFx.doneData, (_, { user }) => user);
