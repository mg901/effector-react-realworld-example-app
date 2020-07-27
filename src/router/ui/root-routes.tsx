import { useMemo } from 'react';
import { useStore } from 'effector-react';
import { renderRoutes } from 'react-router-config';
import { $$isAuthorized } from '../../auth';
import { makeRootRoutes } from '../routes';

export const RootRoutes = (): JSX.Element => {
  const isAuth = useStore($$isAuthorized);

  return useMemo(() => renderRoutes(makeRootRoutes(isAuth)), [isAuth]);
};
