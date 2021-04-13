import { lazy } from 'react';
import { RouteConfig } from 'react-router-config';
import { Paths, filterRoutes } from 'router';

export const makeRoutes = (isAuth: boolean): RouteConfig[] =>
  [
    {
      path: Paths.YOUR_FEED,
      exact: true,
      forAuth: true,
      component: lazy(() => import('./pages/your-feed')),
    },
    {
      path: Paths.GLOBAL_FEED,
      exact: true,
      component: lazy(() => import('./pages/global-feed')),
    },
    {
      path: Paths.FEED_BY_TAG,
      exact: true,
      component: lazy(() => import('./pages/feed-by-tag')),
    },
    {
      path: '*',
      component: lazy(() => import('../not-match')),
    },
  ].filter(filterRoutes(isAuth));
