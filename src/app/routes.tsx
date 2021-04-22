import { lazy } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { Urls, PrivateRoute } from 'router';

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
      <Redirect exact from={Urls.ROOT} to={Urls.HOME} />
      <Route component={Login} path={Urls.LOGIN} />
      <Route component={Registration} path={Urls.REGISTRATION} />
      <Route component={Home} path={Urls.HOME} />
      <PrivateRoute exact component={Editor} path={Urls.EDITOR} />
      <PrivateRoute component={Editor} path={Urls.EDITOR_SLUG} />
      <PrivateRoute component={Settings} path={Urls.SETTINGS} />
      <PrivateRoute component={Profile} path={Urls.PROFILE} />
      <Route component={Article} path={Urls.ARTICLE} />
      <Route component={NoMatch} path="*" />
    </Switch>
  );
};
