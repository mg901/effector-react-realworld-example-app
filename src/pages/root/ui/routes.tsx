import { useMemo } from 'react';
import { renderRoutes } from 'react-router-config';
import { useStore } from 'effector-react';
import * as auth from '../../../auth';
import { makeRoutes } from '../library';

export const Routes = (): JSX.Element => {
  const isAuth = useStore(auth.model.$isAuthorized);

  return useMemo(() => renderRoutes(makeRoutes(isAuth)), [isAuth]);
};
