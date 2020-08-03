import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';
import { Paths, filterRoutes, RouteConfig } from '../../router';

export const makeRoutes = (isAuth: boolean): RouteConfig[] =>
  [
    {
      path: Paths.YOUR_FEED,
      exact: true,
      forAuth: true,
      component: lazy(() =>
        import('../your-feed').then((x) => ({ default: x.YourFeed })),
      ),
    },
    {
      path: Paths.GLOBAL_FEED,
      exact: true,
      component: lazy(() =>
        import('../global-feed').then((x) => ({
          default: x.GlobalFeed,
        })),
      ),
    },
    {
      path: Paths.FEED_BY_TAG,
      exact: true,
      component: lazy(() =>
        import('../feed-by-tag').then((x) => ({
          default: x.FeedByTag,
        })),
      ),
    },
    {
      path: '*',
      component: () => <Redirect to={Paths.ROOT} />,
    },
  ].filter(filterRoutes(isAuth));
