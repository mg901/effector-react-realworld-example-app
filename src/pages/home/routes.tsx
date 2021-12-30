import { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import * as visitor from '@/entities/visitor';

import NoMatchPage from '@/pages/no-match';
import { ROUTES, PrivateRoute } from '@/shared/router';
import { Spinner } from '@/shared/ui';

const GlobalFeedPage = lazy(() => import('./pages/global-feed'));
const YourFeedPage = lazy(() => import('./pages/global-feed'));
const FeedByTagPage = lazy(() => import('./pages/feed-by-tag'));

export const Routes = () => {
  const isAuth = visitor.selectors.useIsAuthorized();

  return (
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route exact path={ROUTES.ROOT}>
          {isAuth ? (
            <Redirect to={ROUTES.YOUR_FEED} />
          ) : (
            <Redirect to={ROUTES.GLOBAL_FEED} />
          )}
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
