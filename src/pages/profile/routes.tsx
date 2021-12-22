import { lazy } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import NoMatch from 'pages/not-match';
import { RoutesWrapper, PrivateRoute } from 'shared/library/router';

const MyArticles = lazy(() => import('./pages/my-articles'));
const FavoritedArticles = lazy(() => import('./pages/favorited-articles'));

export const Routes: React.FC = () => {
  const { path } = useRouteMatch<{ path: string }>();

  return (
    <RoutesWrapper>
      <Switch>
        <PrivateRoute exact path={path}>
          <MyArticles />
        </PrivateRoute>
        <PrivateRoute path={`${path}/favorites`}>
          <FavoritedArticles />
        </PrivateRoute>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </RoutesWrapper>
  );
};
