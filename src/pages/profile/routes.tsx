import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import NoMatch from '@/pages/no-match';
import { ROUTES } from '@/shared/router';
import { Spinner } from '@/shared/ui';

const MyArticlesPage = lazy(() => import('./pages/my-articles'));
const FavoritedArticlesPage = lazy(() => import('./pages/favorited-articles'));

export const Routes = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route exact path={ROUTES.PROFILE}>
          <MyArticlesPage />
        </Route>
        <Route path={ROUTES.PROFILE_FAVORITES}>
          <FavoritedArticlesPage />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Suspense>
  );
};
