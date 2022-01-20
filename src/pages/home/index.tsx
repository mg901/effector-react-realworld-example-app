import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ROUTES, PrivateRoute } from '@/shared/router';
import { Spinner } from '@/shared/ui';
import { Default } from './pages/default';
import { Layout } from './ui/layout';

const GlobalFeedPage = lazy(() => import('./pages/global-feed'));
const YourFeedPage = lazy(() => import('./pages/global-feed'));
const FeedByTagPage = lazy(() => import('./pages/feed-by-tag'));

const HomePage = () => {
  return (
    <Layout>
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
        </Switch>
      </Suspense>
    </Layout>
  );
};

export default HomePage;
