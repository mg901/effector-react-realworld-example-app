import { lazy, Suspense, useLayoutEffect } from 'react';
import { Switch, Route, useParams } from 'react-router-dom';
import { ROUTES } from '@/shared/router';
import { Spinner } from '@/shared/ui';
import * as model from './model';
import { Layout } from './ui/layout';

const MyArticlesPage = lazy(() => import('./pages/my-articles'));
const FavoritedArticlesPage = lazy(() => import('./pages/favorited-articles'));

const ProfilePage = () => {
  useModel();

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

function useModel() {
  const { username } = useParams<{ username: string }>();

  useLayoutEffect(() => {
    model.attachUsername(username);
  }, [username]);
}

export default ProfilePage;
