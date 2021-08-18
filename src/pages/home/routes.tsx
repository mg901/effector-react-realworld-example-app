import { lazy } from 'react';
import { Switch, Redirect, Route, useRouteMatch } from 'react-router-dom';
import * as user from 'entities/user';
import { URLS, PrivateRoute } from 'shared/library/router';

const YourFeed = lazy(() => import('./pages/your-feed'));
const GlobalFeed = lazy(() => import('./pages/global-feed'));
const FeedByTab = lazy(() => import('./pages/feed-by-tag'));
const NoMatch = lazy(() => import('pages/not-match'));

export const Routes: React.FC = () => {
  const { path } = useRouteMatch<{ path: string }>();
  const isAuth = user.selectors.useIsAuth();

  return (
    <Switch>
      <Route exact path="/home">
        {isAuth ? (
          <Redirect to={`${path}${URLS.YOUR_FEED}`} />
        ) : (
          <Redirect to={`${path}${URLS.GLOBAL_FEED}`} />
        )}
      </Route>
      <Route component={GlobalFeed} path={`${path}${URLS.GLOBAL_FEED}`} />
      <PrivateRoute component={YourFeed} path={`${path}${URLS.YOUR_FEED}`} />
      <Route component={FeedByTab} path={`${path}${URLS.FEED_BY_TAG}`} />
      <Route component={NoMatch} path="*" />
    </Switch>
  );
};
