import { lazy } from 'react';
import { RouteConfig } from 'react-router-config';
import { Redirect } from 'react-router-dom';
import { Paths, filterRoutes } from 'router';
import { HomePage } from '../pages/home';

export const makeRoutes = (isAuth: boolean): RouteConfig[] =>
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
      component: lazy(() => import('../pages/login')),
    },
    {
      path: Paths.REGISTRATION,
      component: lazy(() => import('../pages/registration')),
    },
    {
      path: Paths.HOME,
      component: HomePage,
    },
    {
      path: Paths.EDITOR,
      exact: true,
      component: lazy(() => import('../pages/editor')),
    },
    {
      path: Paths.EDITOR_SLUG,
      exact: true,
      component: lazy(() => import('../pages/editor')),
    },
    {
      path: Paths.SETTINGS,
      forAuth: true,
      component: lazy(() => import('../pages/settings')),
    },
    {
      path: Paths.PROFILE,
      component: lazy(() => import('../pages/profile')),
    },
    {
      path: Paths.ARTICLE,
      exact: true,
      component: lazy(() => import('../pages/article')),
    },
    {
      path: '*',
      component: lazy(() => import('../pages/not-match')),
    },
  ].filter(filterRoutes(isAuth));
