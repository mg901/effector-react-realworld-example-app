import React, { useMemo } from 'react';
import { useStore } from 'effector-react';
import { Redirect } from 'react-router-dom';
import { renderRoutes, RouteConfig } from 'react-router-config';
import { $$isAuth } from '../../auth';
import {
  RootPage,
  LoginPage,
  RegistrationPage,
  GlobalFeedPage,
  YourFeedPage,
  NotMatchPage,
} from '../../pages';

export const filterRoutes = (isAuth: boolean) => (
  route: RouteConfig,
): boolean => {
  if (typeof route.forAuth === 'undefined') return true;

  return route.forAuth === isAuth;
};

export const makeRoutes = (isAuth: boolean): RouteConfig[] => [
  {
    component: RootPage,
    routes: [
      {
        path: '/',
        exact: true,
        forAuth: true,
        component: () => <Redirect to="your-feed" />,
      },
      {
        path: '/',
        exact: true,
        forAuth: false,
        component: () => <Redirect to="/global-feed" />,
      },
      {
        path: '/login',
        exact: true,
        forAuth: true,
        component: () => <Redirect to="your-feed" />,
      },
      {
        path: '/registration',
        exact: true,
        forAuth: true,
        component: () => <Redirect to="your-feed" />,
      },
      {
        path: '/login',
        exact: true,
        forAuth: false,
        component: LoginPage,
      },
      {
        path: '/registration',
        exact: true,
        forAuth: false,
        component: RegistrationPage,
      },
      {
        path: '/your-feed',
        exact: true,
        forAuth: true,
        component: YourFeedPage,
      },
      {
        path: '/global-feed',
        exact: true,
        component: GlobalFeedPage,
      },
      {
        path: '*',
        component: NotMatchPage,
      },
    ].filter(filterRoutes(isAuth)),
  },
];

export const Routes = (): JSX.Element => {
  const isAuth = useStore($$isAuth);

  return useMemo(() => renderRoutes(makeRoutes(isAuth)), [isAuth]);
};
