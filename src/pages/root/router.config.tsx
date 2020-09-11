import React, { lazy } from 'react';
import { RouteConfig } from 'react-router-config';
import { Redirect } from 'react-router-dom';
import { filterRoutes, Paths } from '@core/router';
import { Home } from '../home';

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
      component: lazy(() =>
        import('../login').then((x) => ({ default: x.Login })),
      ),
    },
    {
      path: Paths.REGISTRATION,
      exact: true,
      forAuth: false,
      component: lazy(() =>
        import('../registration').then((x) => ({
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
        import('../editor').then((x) => ({ default: x.Editor })),
      ),
    },
    {
      path: Paths.SETTINGS,
      component: lazy(() =>
        import('../settings').then((x) => ({ default: x.Settings })),
      ),
    },
    {
      path: Paths.PROFILE,
      component: lazy(() =>
        import('../profile').then((x) => ({ default: x.Profile })),
      ),
    },
    {
      path: '*',
      component: lazy(() =>
        import('../not-match').then((x) => ({ default: x.NotMatch })),
      ),
    },
  ].filter(filterRoutes(isAuth));
