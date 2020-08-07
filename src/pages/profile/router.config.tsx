import { lazy } from 'react';
import { Paths } from '../../router';

export const routes = [
  {
    path: Paths.PROFILE,
    exact: true,
    component: lazy(() =>
      import('./ui/my-articles').then((x) => ({ default: x.MyArticles })),
    ),
  },
  {
    path: Paths.PROFILE_FAVORITES,
    exact: true,
    component: lazy(() =>
      import('./ui/favorited-articles').then((x) => ({
        default: x.FavoritedArticles,
      })),
    ),
  },
];
