import React, { lazy } from 'react';
import { RouteConfig } from 'react-router-config';
import { Redirect } from 'react-router-dom';
import { Paths, filterRoutes } from 'library/router';
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
      component: lazy(() =>
        import('../pages/login').then((response) => ({
          default: response.LoginPage,
        })),
      ),
    },
    {
      path: Paths.REGISTRATION,
      component: lazy(() =>
        import('../pages/registration').then((response) => ({
          default: response.RegistrationPage,
        })),
      ),
    },
    {
      path: Paths.HOME,
      component: HomePage,
    },
    // {
    //   path: Paths.EDITOR,
    //   exact: true,
    //   component: lazy(() =>
    //     import('../pages/editor').then((response) => ({
    //       default: response.EditorPage,
    //     })),
    //   ),
    // },
    // {
    //   path: Paths.EDITOR_SLUG,
    //   exact: true,
    //   component: lazy(() =>
    //     import('../pages/editor').then((response) => ({
    //       default: response.EditorPage,
    //     })),
    //   ),
    // },
    // {
    //   path: Paths.SETTINGS,
    //   forAuth: true,
    //   component: lazy(() =>
    //     import('../pages/settings').then((response) => ({
    //       default: response.SettingsPage,
    //     })),
    //   ),
    // },
    // {
    //   path: Paths.PROFILE,
    //   component: lazy(() =>
    //     import('../pages/profile').then((response) => ({
    //       default: response.ProfilePage,
    //     })),
    //   ),
    // },
    // {
    //   path: Paths.ARTICLE,
    //   exact: true,
    //   component: lazy(() =>
    //     import('../pages/article').then((response) => ({
    //       default: response.ArticlePage,
    //     })),
    //   ),
    // },
    {
      path: '*',
      component: lazy(() =>
        import('../pages/not-match').then((response) => ({
          default: response.NotMatchPage,
        })),
      ),
    },
  ].filter(filterRoutes(isAuth));
