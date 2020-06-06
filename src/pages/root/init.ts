import { split, sample, forward, merge } from 'effector';
import { $$isAuth, $authorizedUser } from '../../auth';
import {
  RootGate,
  fxInitAuthApp,
  fxIntitNotAuthApp,
  fxFetchUser,
} from './model';

const { authenticated, notAuthenticated } = split(
  merge([sample($$isAuth, RootGate.open), $$isAuth.updates]),
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
