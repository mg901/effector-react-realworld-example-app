import { useMemo } from 'react';
import { useStore } from 'effector-react';
import { renderRoutes } from 'react-router-config';
import { $$isAuthorized } from '../../auth';
import { makeHomeRoutes } from '../routes';

export const HomeRoutes = (): JSX.Element => {
  const isAuth = useStore($$isAuthorized);

  return useMemo(() => renderRoutes(makeHomeRoutes(isAuth)), [isAuth]);
};
