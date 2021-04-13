import { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Paths } from 'router';

const YourFeed = lazy(() => import('../pages/your-feed'));
const GlobalFeed = lazy(() => import('../pages/global-feed'));
const FeedByTab = lazy(() => import('../pages/feed-by-tag'));

export const Routes: React.FC = () => (
  <Switch>
    <Route component={YourFeed} path={Paths.YOUR_FEED} />
    <Route component={GlobalFeed} path={Paths.GLOBAL_FEED} />
    <Route component={FeedByTab} path={Paths.FEED_BY_TAG} />
  </Switch>
);
