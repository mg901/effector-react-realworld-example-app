import { lazy, Suspense } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import NotMatch from 'pages/no-match';
import { Spinner } from 'shared/ui';

const MyArticles = lazy(() => import('./pages/my-articles'));
const FavoritedArticles = lazy(() => import('./pages/favorited-articles'));

export const Routes = () => {
  const { path } = useRouteMatch<{ path: string }>();

  return (
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route exact path={path}>
          <MyArticles />
        </Route>
        <Route path={`${path}/favorites`}>
          <FavoritedArticles />
        </Route>
        <Route path="*">
          <NotMatch />
        </Route>
      </Switch>
    </Suspense>
  );
};
