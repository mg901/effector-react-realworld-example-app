import React, { useMemo } from 'react';
import { useStore } from 'effector-react';
import { renderRoutes } from 'react-router-config';
import { $$isAuthorized } from '../../auth';

type Props = {
  check: 'anon' | 'auth';
};

export const AuthBranch: React.FC<Props> = ({ check, children }) => {
  const isAuth = useStore($$isAuthorized);

  if (isAuth === true && check === 'auth') {
    return <>{children}</>;
  }
  if (isAuth === false && check === 'anon') {
    return <>{children}</>;
  }

  return null;
};

export const RootRoutes = (): JSX.Element => {
  const isAuth = useStore($$isAuthorized);

  return useMemo(() => renderRoutes(makeRootRoutes(isAuth)), [isAuth]);
};

export const HomeRoutes = (): JSX.Element => {
  const isAuth = useStore($$isAuthorized);

  return useMemo(() => renderRoutes(makeHomeRoutes(isAuth)), [isAuth]);
};
