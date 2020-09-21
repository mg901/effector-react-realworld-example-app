import { useMemo } from 'react';
import { renderRoutes } from 'react-router-config';
import { useStore } from 'effector-react';
import * as auth from 'features/auth';
import { makeRoutes } from '../router.config';

export const Routes = (): JSX.Element => {
  const isAuth = useStore(auth.model.$isAuthorized);

  return useMemo(() => renderRoutes(makeRoutes(isAuth)), [isAuth]);
};
