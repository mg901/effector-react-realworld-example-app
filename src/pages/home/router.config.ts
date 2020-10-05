import { lazy } from 'react';
import { RouteConfig } from 'react-router-config';
import { Paths, filterRoutes } from '../../library/router';

export const makeRoutes = (isAuth: boolean): RouteConfig[] =>
  [
    {
      path: Paths.YOUR_FEED,
      exact: true,
      forAuth: true,
      component: lazy(() =>
        import('./pages/your-feed').then((x) => ({
          default: x.YourFeedPage,
        })),
      ),
    },
    {
      path: Paths.GLOBAL_FEED,
      exact: true,
      component: lazy(() =>
        import('./pages/global-feed').then((x) => ({
          default: x.GlobalFeedPage,
        })),
      ),
    },
    {
      path: Paths.FEED_BY_TAG,
      exact: true,
      component: lazy(() =>
        import('./pages/feed-by-tag').then((x) => ({
          default: x.FeedByTagPage,
        })),
      ),
    },
    {
      path: '*',
      component: lazy(() =>
        import('../not-match').then((x) => ({ default: x.NotMatchPage })),
      ),
    },
  ].filter(filterRoutes(isAuth));
