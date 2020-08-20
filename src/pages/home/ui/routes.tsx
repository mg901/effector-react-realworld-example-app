import { useMemo } from 'react';
import { useStore } from 'effector-react';
import { renderRoutes } from 'react-router-config';
import { authModel } from '../../../core/auth';
import { makeRoutes } from '../router.config';

export const Routes = (): JSX.Element => {
  const isAuth = useStore(authModel.$isAuthorized);

  return useMemo(() => renderRoutes(makeRoutes(isAuth)), [isAuth]);
};
