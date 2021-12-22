import { Switch, Route, useRouteMatch } from 'react-router-dom';
import NoMatch from 'pages/not-match';
import { PrivateRoute } from 'shared/library/router';

import FavoritedArticles from './pages/favorited-articles';
import MyArticles from './pages/my-articles';

export const Routes: React.FC = () => {
  const { path } = useRouteMatch<{ path: string }>();

  return (
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
  );
};
