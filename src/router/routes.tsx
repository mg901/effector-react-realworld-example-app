import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';
import { RouteConfig } from 'react-router-config';
import { Home } from '../pages/home';

export enum Paths {
  ROOT = '/',
  HOME = '/home',
  YOUR_FEED = '/home/your-feed',
  GLOBAL_FEED = '/home/global-feed',
  FEED_BY_TAG = '/home/feed-by-tag',
  LOGIN = '/login',
  REGISTRATION = '/registration',
  SETTINGS = '/settings',
  EDITOR = '/editor',
  PROFILE = '/@:username',
}

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
      component: lazy(() =>
        import('../pages/login').then((x) => ({ default: x.Login })),
      ),
    },
    {
      path: Paths.REGISTRATION,
      exact: true,
      forAuth: false,
      component: lazy(() =>
        import('../pages/registration').then((x) => ({
          default: x.Registration,
        })),
      ),
    },
    {
      path: Paths.HOME,
      component: Home,
    },
    {
      path: Paths.EDITOR,
      component: lazy(() =>
        import('../pages/editor').then((x) => ({ default: x.Editor })),
      ),
    },
    {
      path: Paths.SETTINGS,
      component: lazy(() =>
        import('../pages/settings').then((x) => ({ default: x.Settings })),
      ),
    },
    {
      path: Paths.PROFILE,
      component: lazy(() =>
        import('../pages/profile').then((x) => ({ default: x.Profile })),
      ),
    },
    {
      path: '*',
      component: lazy(() =>
        import('../pages/not-match').then((x) => ({ default: x.NotMatch })),
      ),
    },
  ].filter(filterRoutes(isAuth));

export const makeHomeRoutes = (isAuth: boolean): RouteConfig[] =>
  [
    {
      path: Paths.YOUR_FEED,
      exact: true,
      forAuth: true,
      component: lazy(() =>
        import('../pages/your-feed').then((x) => ({ default: x.YourFeed })),
      ),
    },
    {
      path: Paths.GLOBAL_FEED,
      exact: true,
      component: lazy(() =>
        import('../pages/global-feed').then((x) => ({
          default: x.GlobalFeed,
        })),
      ),
    },
    {
      path: Paths.FEED_BY_TAG,
      exact: true,
      component: lazy(() =>
        import('../pages/feed-by-tag').then((x) => ({
          default: x.FeedByTag,
        })),
      ),
    },
    {
      path: '*',
      component: () => <Redirect to={Paths.ROOT} />,
    },
  ].filter(filterRoutes(isAuth));
