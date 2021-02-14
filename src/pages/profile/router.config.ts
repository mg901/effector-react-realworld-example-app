import { lazy } from 'react';
import { Paths } from 'library/router';

export const routes = [
  {
    path: Paths.PROFILE,
    exact: true,
    component: lazy(() =>
      import('./modules/my-articles').then((response) => ({
        default: response.MyArticles,
      })),
    ),
  },
  {
    path: Paths.PROFILE_FAVORITES,
    exact: true,
    component: lazy(() =>
      import('./modules/favorited-articles').then((response) => ({
        default: response.FavoritedArticles,
      })),
    ),
  },
  {
    path: '*',
    component: lazy(() =>
      import('../not-match').then((response) => ({
        default: response.NotMatchPage,
      })),
    ),
  },
];
