import { lazy } from 'react';
import { Switch, Redirect, Route, useRouteMatch } from 'react-router-dom';
import { Urls, AuthCosumer, PrivateRoute } from 'router';

const YourFeed = lazy(() => import('./pages/your-feed'));
const GlobalFeed = lazy(() => import('./pages/global-feed'));
const FeedByTab = lazy(() => import('./pages/feed-by-tag'));
const NoMatch = lazy(() => import('pages/not-match'));

export const Routes: React.FC = () => {
  const { path } = useRouteMatch<{ path: string }>();

  return (
    <Switch>
      <Route exact path="/home">
        <AuthCosumer>
          {({ isAuth }) =>
            isAuth ? (
              <Redirect to={`${path}${Urls.YOUR_FEED}`} />
            ) : (
              <Redirect to={`${path}${Urls.GLOBAL_FEED}`} />
            )
          }
        </AuthCosumer>
      </Route>
      <Route component={GlobalFeed} path={`${path}${Urls.GLOBAL_FEED}`} />
      <PrivateRoute component={YourFeed} path={`${path}${Urls.YOUR_FEED}`} />
      <Route component={FeedByTab} path={`${path}${Urls.FEED_BY_TAG}`} />
      <Route component={NoMatch} path="*" />
    </Switch>
  );
};
