import { useMemo } from 'react';
import { useStore } from 'effector-react';
import { $$isAuthorized } from '../../../auth';
import { renderRoutes } from '../../../router';
import { makeRoutes } from '../router-config';

export const Routes = (): JSX.Element => {
  const isAuth = useStore($$isAuthorized);

  return useMemo(() => renderRoutes(makeRoutes(isAuth)), [isAuth]);
};
