import { lazy } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { Paths } from 'router';

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
      <Route component={Editor} path={Paths.EDITOR} />
      <Route component={Editor} path={Paths.EDITOR_SLUG} />
      <Route component={Settings} path={Paths.SETTINGS} />
      <Route component={Profile} path={Paths.PROFILE} />
      <Route component={Article} path={Paths.ARTICLE} />
      <Route component={NoMatch} path="*" />
    </Switch>
  );
};
