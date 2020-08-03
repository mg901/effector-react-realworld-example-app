import React, { useMemo } from 'react';
import { useStore } from 'effector-react';
import { renderRoutes } from '../../../../router';
import { $$isAuthorized } from '../../../../auth';
import { makeRoutes } from '../../router-config';

export const Routes = (): JSX.Element => {
  const isAuth = useStore($$isAuthorized);

  return useMemo(() => renderRoutes(makeRoutes(isAuth)), [isAuth]);
};
