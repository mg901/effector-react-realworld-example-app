import { split, sample, forward, merge } from 'effector';
import { $$isAuthorized, $authorizedUser } from '../../auth';
import {
  RootGate,
  fxInitAuthApp,
  fxIntitNotAuthApp,
  fxFetchUser,
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

$authorizedUser.on(fxFetchUser.doneData, (_, { user }) => user);
