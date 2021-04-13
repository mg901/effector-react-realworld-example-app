import { lazy } from 'react';
import { Paths } from 'router';

export const routes = [
  {
    path: Paths.PROFILE,
    exact: true,
    component: lazy(() => import('./pages/my-articles')),
  },
  {
    path: Paths.PROFILE_FAVORITES,
    exact: true,
    component: lazy(() => import('./pages/favorited-articles')),
  },
  {
    path: '*',
    component: lazy(() => import('../not-match')),
  },
];
