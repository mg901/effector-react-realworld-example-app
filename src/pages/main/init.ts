import { split, sample, forward, merge } from 'effector';
import * as auth from '../../features/auth';
import * as model from './model';

const { authenticated, notAuthenticated } = split(
  merge([
    sample(auth.model.$isAuthorized, model.RootGate.open),
    auth.model.$isAuthorized.updates,
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

auth.model.$authorizedUser.on(model.getUserFx.doneData, (_, { user }) => user);
model.$tags.on(model.getTagsFx.doneData, (_, { tags }) => tags);
