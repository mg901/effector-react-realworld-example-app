import { lazy } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { PrivateRoute } from 'shared/library/router';

const MyArticles = lazy(() => import('./pages/my-articles'));
const FavoritedArticles = lazy(() => import('./pages/favorited-articles'));
const NoMatch = lazy(() => import('pages/not-match'));

export const Routes: React.FC = () => {
  const { path } = useRouteMatch<{ path: string }>();

  return (
    <Switch>
      <Route component={NoMatch} path="*" />
      <PrivateRoute exact component={MyArticles} path={path} />
      <PrivateRoute component={FavoritedArticles} path={`${path}/favorites`} />
    </Switch>
  );
};
