import { lazy, Suspense } from 'react';
import { Switch, Redirect, Route, useRouteMatch } from 'react-router-dom';
import * as visitor from 'entities/visitor';
import NoMatchPage from 'pages/no-match';
import { URLS, PrivateRoute } from 'shared/library/router';
import { Spinner } from 'shared/ui';

const GlobalFeed = lazy(() => import('./pages/global-feed'));
const YourFeed = lazy(() => import('./pages/global-feed'));
const FeedByTag = lazy(() => import('./pages/feed-by-tag'));

export const Routes: React.FC = () => {
  const { path } = useRouteMatch<{ path: string }>();
  const isAuth = visitor.selectors.useIsAuthorized();

  return (
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route exact path="/home">
          {isAuth ? (
            <Redirect to={`${path}${URLS.YOUR_FEED}`} />
          ) : (
            <Redirect to={`${path}${URLS.GLOBAL_FEED}`} />
          )}
        </Route>
        <Route path={`${path}${URLS.GLOBAL_FEED}`}>
          <GlobalFeed />
        </Route>
        <PrivateRoute path={`${path}${URLS.YOUR_FEED}`}>
          <YourFeed />
        </PrivateRoute>
        <Route path={`${path}${URLS.FEED_BY_TAG}`}>
          <FeedByTag />
        </Route>
        <Route path="*">
          <NoMatchPage />
        </Route>
      </Switch>
    </Suspense>
  );
};
