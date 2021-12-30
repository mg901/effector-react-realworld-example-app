import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import NoMatchPage from '@/pages/no-match';
import { ROUTES, PrivateRoute } from '@/shared/router';
import { Spinner } from '@/shared/ui';
import { DefaultPage } from './pages/default';

const GlobalFeedPage = lazy(() => import('./pages/global-feed'));
const YourFeedPage = lazy(() => import('./pages/global-feed'));
const FeedByTagPage = lazy(() => import('./pages/feed-by-tag'));

export const Routes = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route exact path={ROUTES.ROOT}>
          <DefaultPage />
        </Route>
        <Route path={ROUTES.GLOBAL_FEED}>
          <GlobalFeedPage />
        </Route>
        <PrivateRoute path={ROUTES.YOUR_FEED}>
          <YourFeedPage />
        </PrivateRoute>
        <Route path={ROUTES.FEED_BY_TAG}>
          <FeedByTagPage />
        </Route>
        <Route path="*">
          <NoMatchPage />
        </Route>
      </Switch>
    </Suspense>
  );
};
