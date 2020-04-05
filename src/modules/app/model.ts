import { forward, split } from 'effector';
import { createGate } from 'effector-react';
import { fxGetTokenFromLoSt, fxInitAuthApp, fxIntitNotAuthApp } from '../auth';

// check mount / unmount
export const AppGate = createGate();

// request id at page start
forward({
  from: AppGate.open,
  to: fxGetTokenFromLoSt,
});

const { isAuth, isNotAuth } = split(fxGetTokenFromLoSt.doneData, {
  isAuth: (x) => Boolean(x) === true,
  isNotAuth: (x) => Boolean(x) === false,
});

forward({
  from: isAuth,
  to: fxInitAuthApp,
});

forward({
  from: isNotAuth,
  to: fxIntitNotAuthApp,
});

fxIntitNotAuthApp.finally.watch((x) => console.log(x, 'fxIntitNotAuthApp'));
