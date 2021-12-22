import { lazy } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { URLS, RoutesWrapper, PrivateRoute } from 'shared/library/router';

const Login = lazy(() => import('pages/login'));
const Registration = lazy(() => import('pages/registration'));
const Home = lazy(() => import('pages/home'));
const Editor = lazy(() => import('pages/editor'));
const Settings = lazy(() => import('pages/settings'));
const Profile = lazy(() => import('pages/profile'));
const Article = lazy(() => import('pages/profile'));
const NotMatch = lazy(() => import('pages/not-match'));

export const Routes: React.FC = () => {
  return (
    <RoutesWrapper>
      <Switch>
        <Redirect exact from={URLS.ROOT} to={URLS.HOME} />
        <Route path={URLS.LOGIN}>
          <Login />
        </Route>
        <Route path={URLS.REGISTRATION}>
          <Registration />
        </Route>
        <Route path={URLS.HOME}>
          <Home />
        </Route>
        <PrivateRoute exact path={URLS.EDITOR}>
          <Editor />
        </PrivateRoute>
        <PrivateRoute path={URLS.EDITOR_SLUG}>
          <Editor />
        </PrivateRoute>
        <PrivateRoute path={URLS.SETTINGS}>
          <Settings />
        </PrivateRoute>
        <PrivateRoute path={URLS.PROFILE}>
          <Profile />
        </PrivateRoute>
        <Route path={URLS.ARTICLE}>
          <Article />
        </Route>
        <Route path="*">
          <NotMatch />
        </Route>
      </Switch>
    </RoutesWrapper>
  );
};
