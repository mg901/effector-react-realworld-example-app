import React, { useMemo } from 'react';
import { useStore } from 'effector-react';
import { Redirect } from 'react-router-dom';
import { renderRoutes, RouteConfig } from 'react-router-config';
import { $$isAuthorized } from '../auth';
import {
  LoginPage,
  RegistrationPage,
  HomePage,
  GlobalFeedPage,
  YourFeedPage,
  FeedByTagPage,
  NotMatchPage,
} from '../pages';
import { Links } from './constants';

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
      component: () => <Redirect to={Links.YOUR_FEED} />,
    },
    {
      path: '/',
      exact: true,
      forAuth: false,
      component: () => <Redirect to={Links.GLOBAL_FEED} />,
    },
    {
      path: '/login',
      exact: true,
      forAuth: true,
      component: () => <Redirect to={Links.YOUR_FEED} />,
    },
    {
      path: '/registration',
      exact: true,
      forAuth: true,
      component: () => <Redirect to={Links.YOUR_FEED} />,
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
      path: '/feed-by-tag',
      exact: true,
      component: FeedByTagPage,
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
