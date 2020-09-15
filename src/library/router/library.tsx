import React from 'react';
import { RouteConfig } from 'react-router-config';
import { useStore } from 'effector-react';
import * as auth from '../../auth';

type Props = {
  check: 'anon' | 'auth';
};

export const AuthBranch: React.FC<Props> = ({ check, children }) => {
  const isAuth = useStore(auth.model.$isAuthorized);

  if (isAuth === true && check === 'auth') {
    return <>{children}</>;
  }
  if (isAuth === false && check === 'anon') {
    return <>{children}</>;
  }

  return null;
};

export const filterRoutes = (isAuth: boolean) => (
  route: RouteConfig,
): boolean => {
  if (typeof route.forAuth === 'undefined') return true;

  return route.forAuth === isAuth;
};
