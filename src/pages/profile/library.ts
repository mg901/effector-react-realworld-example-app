import { lazy } from 'react';
import { Paths } from '../../library/router';

export const routes = [
  {
    path: Paths.PROFILE,
    exact: true,
    component: lazy(() =>
      import('./pages/my-articles/ui/my-articles').then((x) => ({
        default: x.MyArticles,
      })),
    ),
  },
  {
    path: Paths.PROFILE_FAVORITES,
    exact: true,
    component: lazy(() =>
      import('./pages/favorited-articles/ui/favorited-articles').then((x) => ({
        default: x.FavoritedArticles,
      })),
    ),
  },
  {
    path: '*',
    component: lazy(() =>
      import('../not-match').then((x) => ({ default: x.NotMatch })),
    ),
  },
];
