import { split, sample, forward, merge } from 'effector';
import * as authUser from 'features/user';
import * as model from './model';

const { authenticated, notAuthenticated } = split(
  merge([
    sample(authUser.model.$isAuthorized, model.PageGate.open),
    authUser.model.$isAuthorized.updates,
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

authUser.model.$user.on(model.getUserFx.doneData, (_, payload) => payload);
model.$tags.on(model.getTagsFx.doneData, (_, payload) => payload);
