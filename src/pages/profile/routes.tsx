import { lazy, Suspense } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import NoMatch from '@/pages/no-match';
import { Spinner } from '@/shared/ui';

const MyArticlesPage = lazy(() => import('./pages/my-articles'));
const FavoritedArticlesPage = lazy(() => import('./pages/favorited-articles'));

export const Routes = () => {
  const { path } = useRouteMatch<{ path: string }>();

  return (
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route exact path={path}>
          <MyArticlesPage />
        </Route>
        <Route path={`${path}/favorites`}>
          <FavoritedArticlesPage />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Suspense>
  );
};
