import { split, sample, forward, merge } from 'effector';
import { authModel } from '../../core/auth';
import * as model from './model';

const { authenticated, notAuthenticated } = split(
  merge([
    sample(authModel.$isAuthorized, model.RootGate.open),
    authModel.$isAuthorized.updates,
  ]),
  {
    authenticated: (is) => is === true,
    notAuthenticated: (is) => is === false,
  },
);

forward({
  from: authenticated,
  to: model.initAuthAppFx,
});

forward({
  from: notAuthenticated,
  to: model.getTagsFx,
});

authModel.$authorizedUser.on(model.getUserFx.doneData, (_, { user }) => user);
