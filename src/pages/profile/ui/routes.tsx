import { lazy } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

const MyArticles = lazy(() => import('../pages/my-articles'));
const FavoritedArticles = lazy(() => import('../pages/favorited-articles'));

export const Routes: React.FC = () => {
  const { path } = useRouteMatch<{ path: string }>();

  return (
    <Switch>
      <Route component={MyArticles} path={path} />
      <Route component={FavoritedArticles} path={`${path}/favorites`} />
    </Switch>
  );
};
