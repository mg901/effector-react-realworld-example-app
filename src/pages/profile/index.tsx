import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useGate } from 'effector-react';
import { ROUTES } from '@/shared/router';
import { Spinner } from '@/shared/ui';
import * as model from './model';
import { Layout } from './ui/layout';

const MyArticlesPage = lazy(() => import('./pages/my-articles'));
const FavoritedArticlesPage = lazy(() => import('./pages/favorited-articles'));

const ProfilePage = () => {
  useGate(model.Gate);

  return (
    <Layout>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path={ROUTES.profile.root}>
            <MyArticlesPage />
          </Route>
          <Route path={ROUTES.profile.favorites}>
            <FavoritedArticlesPage />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
};

export default ProfilePage;
