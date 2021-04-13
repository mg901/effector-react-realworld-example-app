import { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Paths } from 'router';

const MyArticles = lazy(() => import('../pages/my-articles'));
const FavoritedArticles = lazy(() => import('../pages/favorited-articles'));

export const Routes: React.FC = () => (
  <Switch>
    <Route component={MyArticles} path={Paths.PROFILE} />
    <Route component={FavoritedArticles} path={Paths.PROFILE_FAVORITES} />
  </Switch>
);
