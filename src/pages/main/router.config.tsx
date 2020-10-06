import React, { lazy } from 'react';
import { RouteConfig } from 'react-router-config';
import { Redirect } from 'react-router-dom';
import { Paths, filterRoutes } from '../../modules/router';
import { HomePage } from '../home';

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
        import('../login').then((x) => ({ default: x.LoginPage })),
      ),
    },
    {
      path: Paths.REGISTRATION,
      component: lazy(() =>
        import('../registration').then((x) => ({
          default: x.RegistrationPage,
        })),
      ),
    },
    {
      path: Paths.HOME,
      component: HomePage,
    },
    {
      path: Paths.EDITOR_SLUG || Paths.EDITOR,
      component: lazy(() =>
        import('../editor').then((x) => ({ default: x.EditorPage })),
      ),
    },
    {
      path: Paths.SETTINGS,
      forAuth: true,
      component: lazy(() =>
        import('../settings').then((x) => ({ default: x.SettingsPage })),
      ),
    },
    {
      path: Paths.PROFILE,
      component: lazy(() =>
        import('../profile').then((x) => ({ default: x.ProfilePage })),
      ),
    },
    {
      path: Paths.ARTICLE,
      exact: true,
      component: lazy(() =>
        import('../article').then((x) => ({ default: x.ArticlePage })),
      ),
    },
    {
      path: '*',
      component: lazy(() =>
        import('../not-match').then((x) => ({ default: x.NotMatchPage })),
      ),
    },
  ].filter(filterRoutes(isAuth));
