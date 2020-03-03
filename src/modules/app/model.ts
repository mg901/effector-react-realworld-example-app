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

const { hasToken, isEmptyToken } = split(fxGetTokenFromLoSt.done, {
  hasToken: ({ result }) => Boolean(result) === true,
  isEmptyToken: ({ result }) => Boolean(result) === false,
});

forward({
  from: hasToken,
  to: fxInitAuthApp,
});

forward({
  from: isEmptyToken,
  to: fxIntitNotAuthApp,
});
