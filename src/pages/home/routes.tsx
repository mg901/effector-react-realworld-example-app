import * as visitor from 'entities/visitor';
import NoMatchPage from 'pages/not-match';
import {
  Switch,
  Redirect,
  Route,
  useRouteMatch,
  URLS,
  PrivateRoute,
} from 'shared/library/router';

import FeedByTagPage from './pages/feed-by-tag';
import GlobalFeedPage from './pages/global-feed';
import YourFeedPage from './pages/your-feed';

export const Routes: React.FC = () => {
  const { path } = useRouteMatch<{ path: string }>();
  const isAuth = visitor.selectors.useIsAuthorized();

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
      <Route component={FeedByTagPage} path={`${path}${URLS.FEED_BY_TAG}`} />
      <Route component={NoMatchPage} path="*" />
    </Switch>
  );
};
