import { split, forward } from 'effector';
import { $$isAuth } from '../../auth';
import { fxInitAuthApp, fxIntitNotAuthApp } from './model';

const { isAuthorized, isNotAutorized } = split($$isAuth, {
  isAuthorized: (x) => x === true,
  isNotAutorized: (x) => x === false,
});

forward({
  from: isAuthorized,
  to: fxInitAuthApp,
});

forward({
  from: isNotAutorized,
  to: fxIntitNotAuthApp,
});

console.log('--------------------');
