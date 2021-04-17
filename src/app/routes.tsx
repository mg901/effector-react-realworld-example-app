import { lazy } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { Paths, PrivateRoute } from 'router';

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
      <Redirect exact from={Paths.ROOT} to={Paths.HOME} />
      <Route component={Login} path={Paths.LOGIN} />
      <Route component={Registration} path={Paths.REGISTRATION} />
      <Route component={Home} path={Paths.HOME} />
      <PrivateRoute exact component={Editor} path={Paths.EDITOR} />
      <PrivateRoute component={Editor} path={Paths.EDITOR_SLUG} />
      <PrivateRoute component={Settings} path={Paths.SETTINGS} />
      <PrivateRoute component={Profile} path={Paths.PROFILE} />
      <Route component={Article} path={Paths.ARTICLE} />
      <Route component={NoMatch} path="*" />
    </Switch>
  );
};
