import { useMemo } from 'react';
import { renderRoutes } from 'react-router-config';
import { useStore } from 'effector-react';
import { model } from 'shared/user';
import { makeRoutes } from '../router.config';

export const Routes = (): JSX.Element => {
  const isAuth = useStore(model.$isAuthorized);

  return useMemo(() => renderRoutes(makeRoutes(isAuth)), [isAuth]);
};
