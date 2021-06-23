import { lazy } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { URLS, PrivateRoute } from 'shared/library/router';

const Login = lazy(() => import('pages/login'));
const Registration = lazy(() => import('pages/registration'));
const Home = lazy(() => import('pages/home'));
const Editor = lazy(() => import('pages/editor'));
const Settings = lazy(() => import('pages/settings'));
const Profile = lazy(() => import('pages/profile'));
const Article = lazy(() => import('pages/article'));
const NoMatch = lazy(() => import('pages/not-match'));

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Redirect exact from={URLS.ROOT} to={URLS.HOME} />
      <Route component={Login} path={URLS.LOGIN} />
      <Route component={Registration} path={URLS.REGISTRATION} />
      <Route component={Home} path={URLS.HOME} />
      <PrivateRoute exact component={Editor} path={URLS.EDITOR} />
      <PrivateRoute component={Editor} path={URLS.EDITOR_SLUG} />
      <PrivateRoute component={Settings} path={URLS.SETTINGS} />
      <PrivateRoute component={Profile} path={URLS.PROFILE} />
      <Route component={Article} path={URLS.ARTICLE} />
      <Route component={NoMatch} path="*" />
    </Switch>
  );
};
