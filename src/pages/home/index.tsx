import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import * as visitor from '@/entities/visitor';
import { ROUTES } from '@/shared/router';
import { Spinner } from '@/shared/ui';
import { Layout } from './ui/layout';

const GlobalFeedPage = lazy(() => import('./pages/global-feed'));
const YourFeedPage = lazy(() => import('./pages/your-feed'));
const FeedByTagPage = lazy(() => import('./pages/feed-by-tag'));

const HomePage = () => {
  const isAuth = visitor.selectors.useIsAuthorized();

  return (
    <Layout>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path={ROUTES.root}>
            {isAuth ? <YourFeedPage /> : <GlobalFeedPage />}
          </Route>

          <Route path={ROUTES.globalFeed}>
            <GlobalFeedPage />
          </Route>
          <Route path={ROUTES.feedByTag}>
            <FeedByTagPage />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
};

export default HomePage;
