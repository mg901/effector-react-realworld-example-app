import { lazy } from 'react';
import { RouteConfig } from 'react-router-config';
import { Paths, filterRoutes } from 'router';

export const makeRoutes = (isAuth: boolean): RouteConfig[] =>
  [
    {
      path: Paths.YOUR_FEED,
      exact: true,
      forAuth: true,
      component: lazy(() =>
        import('./modules/your-feed').then((response) => ({
          default: response.YourFeedPage,
        })),
      ),
    },
    {
      path: Paths.GLOBAL_FEED,
      exact: true,
      component: lazy(() =>
        import('./modules/global-feed').then((response) => ({
          default: response.GlobalFeedPage,
        })),
      ),
    },
    {
      path: Paths.FEED_BY_TAG,
      exact: true,
      component: lazy(() =>
        import('./modules/feed-by-tag').then((response) => ({
          default: response.FeedByTagPage,
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
  ].filter(filterRoutes(isAuth));
