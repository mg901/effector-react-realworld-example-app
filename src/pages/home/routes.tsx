import { lazy } from 'react';
import { Switch, Redirect, Route, useRouteMatch } from 'react-router-dom';
import * as user from 'entities/user';
import { URLS, PrivateRoute } from 'shared/library/router';

const YourFeedPage = lazy(() => import('./pages/your-feed'));
const GlobalFeedPage = lazy(() => import('./pages/global-feed'));
const FeedByTabPage = lazy(() => import('./pages/feed-by-tag'));
const NoMatchPage = lazy(() => import('pages/not-match'));

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
      <Route component={GlobalFeedPage} path={`${path}${URLS.GLOBAL_FEED}`} />
      <PrivateRoute
        component={YourFeedPage}
        path={`${path}${URLS.YOUR_FEED}`}
      />
      <Route component={FeedByTabPage} path={`${path}${URLS.FEED_BY_TAG}`} />
      <Route component={NoMatchPage} path="*" />
    </Switch>
  );
};
