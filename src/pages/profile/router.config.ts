import { lazy } from 'react';
import { Paths } from '../../modules/router';

export const routes = [
  {
    path: Paths.PROFILE,
    exact: true,
    component: lazy(() =>
      import('./modules/my-articles').then((x) => ({
        default: x.MyArticles,
      })),
    ),
  },
  {
    path: Paths.PROFILE_FAVORITES,
    exact: true,
    component: lazy(() =>
      import('./modules/favorited-articles').then((x) => ({
        default: x.FavoritedArticles,
      })),
    ),
  },
  {
    path: '*',
    component: lazy(() =>
      import('../not-match').then((x) => ({ default: x.NotMatchPage })),
    ),
  },
];
