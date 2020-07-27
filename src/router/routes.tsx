import React from 'react';
import { Redirect } from 'react-router-dom';
import { RouteConfig } from 'react-router-config';

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

export const makeHomeRoutes = (isAuth: boolean): RouteConfig[] =>
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
