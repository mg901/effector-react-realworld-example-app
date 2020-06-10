import React, { useMemo } from 'react';
import { useStore } from 'effector-react';
import { Redirect } from 'react-router-dom';
import { renderRoutes, RouteConfig } from 'react-router-config';
import { $$isAuthorized } from '../../auth';
import {
  LoginPage,
  RegistrationPage,
  GlobalFeedPage,
  PersonalFeedPage,
  NotMatchPage,
} from '../../pages';

export const filterRoutes = (isAuth: boolean) => (
  route: RouteConfig,
): boolean => {
  if (typeof route.forAuth === 'undefined') return true;

  return route.forAuth === isAuth;
};

export const makeRoutes = (isAuth: boolean): RouteConfig[] =>
  [
    {
      path: '/',
      exact: true,
      forAuth: true,
      component: () => <Redirect to="personal-feed" />,
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
      component: () => <Redirect to="personal-feed" />,
    },
    {
      path: '/registration',
      exact: true,
      forAuth: true,
      component: () => <Redirect to="personal-feed" />,
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
      path: '/personal-feed',
      exact: true,
      forAuth: true,
      component: PersonalFeedPage,
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
  ].filter(filterRoutes(isAuth));

export const Routes = (): JSX.Element => {
  const isAuth = useStore($$isAuthorized);

  return useMemo(() => renderRoutes(makeRoutes(isAuth)), [isAuth]);
};
