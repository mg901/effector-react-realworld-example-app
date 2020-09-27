import { split, sample, forward, merge } from 'effector';
import * as currentUser from 'features/current-user';
import * as model from './model';

const { authenticated, notAuthenticated } = split(
  merge([
    sample(currentUser.model.$isAuthorized, model.PageGate.open),
    currentUser.model.$isAuthorized.updates,
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

currentUser.model.$user.on(model.getUserFx.doneData, (_, payload) => payload);
model.$tags.on(model.getTagsFx.doneData, (_, payload) => payload);
