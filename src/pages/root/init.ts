import { split, sample, forward, merge } from 'effector';
import { $$isAuthorized, $authorizedUser } from '../../auth';
import {
  getTagsFx,
  RootGate,
  fxInitAuthApp,
  fxIntitNotAuthApp,
  fetchUserFx,
  $tags,
} from './model';

const { authenticated, notAuthenticated } = split(
  merge([sample($$isAuthorized, RootGate.open), $$isAuthorized.updates]),
  {
    authenticated: (is) => is === true,
    notAuthenticated: (is) => is === false,
  },
);

forward({
  from: authenticated,
  to: fxInitAuthApp,
});

forward({
  from: notAuthenticated,
  to: fxIntitNotAuthApp,
});

$authorizedUser.on(fetchUserFx.doneData, (_, { user }) => user);
$tags.on(getTagsFx.doneData, (_, { tags }) => tags);
