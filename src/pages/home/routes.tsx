import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import NoMatchPage from '@/pages/no-match';
import { ROUTES, PrivateRoute } from '@/shared/router';
import { Spinner } from '@/shared/ui';
import { Default } from './pages/default';

const GlobalFeedPage = lazy(() => import('./pages/global-feed'));
const YourFeedPage = lazy(() => import('./pages/global-feed'));
const FeedByTagPage = lazy(() => import('./pages/feed-by-tag'));

export const Routes = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route exact path={ROUTES.root}>
          <Default />
        </Route>
        <Route path={ROUTES.globalFeed}>
          <GlobalFeedPage />
        </Route>
        <PrivateRoute path={ROUTES.yourFeed}>
          <YourFeedPage />
        </PrivateRoute>
        <Route path={ROUTES.feedByTag}>
          <FeedByTagPage />
        </Route>
        <Route path="*">
          <NoMatchPage />
        </Route>
      </Switch>
    </Suspense>
  );
};
