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
  EditorPage,
  SettingsPage,
  NotMatchPage,
} from '../pages';
import { Paths } from './constants';

export const filterRoutes = (isAuth: boolean) => (
  route: RouteConfig,
): boolean => {
  if (typeof route.forAuth === 'undefined') return true;

  return route.forAuth === isAuth;
};

export const makeRootRoutes = (isAuth: boolean): RouteConfig[] =>
  [
    {
      path: Paths.ROOT,
      exact: true,
      forAuth: true,
      component: () => <Redirect to={Paths.YOUR_FEED} />,
    },
    {
      path: Paths.ROOT,
      exact: true,
      forAuth: false,
      component: () => <Redirect to={Paths.GLOBAL_FEED} />,
    },
    {
      path: Paths.HOME,
      exact: true,
      forAuth: true,
      component: () => <Redirect to={Paths.YOUR_FEED} />,
    },
    {
      path: Paths.HOME,
      exact: true,
      forAuth: false,
      component: () => <Redirect to={Paths.GLOBAL_FEED} />,
    },
    {
      path: Paths.LOGIN,
      exact: true,
      forAuth: true,
      component: () => <Redirect to={Paths.YOUR_FEED} />,
    },
    {
      path: Paths.REGISTRATION,
      exact: true,
      forAuth: true,
      component: () => <Redirect to={Paths.YOUR_FEED} />,
    },
    {
      path: Paths.LOGIN,
      exact: true,
      component: LoginPage,
    },
    {
      path: Paths.REGISTRATION,
      exact: true,
      forAuth: false,
      component: RegistrationPage,
    },
    {
      path: Paths.HOME,
      component: HomePage,
    },
    {
      path: Paths.EDITOR,
      component: EditorPage,
    },
    {
      path: Paths.SETTINGS,
      component: SettingsPage,
    },
    {
      path: '*',
      component: NotMatchPage,
    },
  ].filter(filterRoutes(isAuth));

const makeHomeRoutes = (isAuth: boolean): RouteConfig[] =>
  [
    {
      path: Paths.YOUR_FEED,
      exact: true,
      forAuth: true,
      component: YourFeedPage,
    },
    {
      path: Paths.GLOBAL_FEED,
      exact: true,
      component: GlobalFeedPage,
    },
    {
      path: Paths.FEED_BY_TAG,
      exact: true,
      component: FeedByTagPage,
    },
    {
      path: '*',
      component: () => <Redirect to={Paths.ROOT} />,
    },
  ].filter(filterRoutes(isAuth));

export const RootRoutes = (): JSX.Element => {
  const isAuth = useStore($$isAuthorized);

  return useMemo(() => renderRoutes(makeRootRoutes(isAuth)), [isAuth]);
};

export const HomeRoutes = (): JSX.Element => {
  const isAuth = useStore($$isAuthorized);

  return useMemo(() => renderRoutes(makeHomeRoutes(isAuth)), [isAuth]);
};
