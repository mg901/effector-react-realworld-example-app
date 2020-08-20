import { split, sample, forward, merge } from 'effector';
import { authModel } from '../../core/auth';
import { RootGate, initAuthAppFx, intitNotAuthAppFx, getUserFx } from './model';

const { authenticated, notAuthenticated } = split(
  merge([
    sample(authModel.$isAuthorized, RootGate.open),
    authModel.$isAuthorized.updates,
  ]),
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

authModel.$authorizedUser.on(getUserFx.doneData, (_, { user }) => user);
