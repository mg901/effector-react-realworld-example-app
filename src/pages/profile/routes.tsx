import NoMatch from 'pages/not-match';
import {
  Switch,
  Route,
  useRouteMatch,
  PrivateRoute,
} from 'shared/library/router';

import FavoritedArticles from './pages/favorited-articles';
import MyArticles from './pages/my-articles';

export const Routes: React.FC = () => {
  const { path } = useRouteMatch<{ path: string }>();

  return (
    <Switch>
      <PrivateRoute exact component={MyArticles} path={path} />
      <PrivateRoute component={FavoritedArticles} path={`${path}/favorites`} />
      <Route component={NoMatch} path="*" />
    </Switch>
  );
};
