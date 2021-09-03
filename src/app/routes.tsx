import { lazy } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { URLS, PrivateRoute } from 'shared/library/router';

const LoginPage = lazy(() => import('pages/login'));
const RegistrationPage = lazy(() => import('pages/registration'));
const HomePage = lazy(() => import('pages/home'));
const EditorPage = lazy(() => import('pages/editor'));
const SettingsPage = lazy(() => import('pages/settings'));
const ProfilePage = lazy(() => import('pages/profile'));
const ArticlePage = lazy(() => import('pages/article'));
const NoMatchPage = lazy(() => import('pages/not-match'));

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Redirect exact from={URLS.ROOT} to={URLS.HOME} />
      <Route component={LoginPage} path={URLS.LOGIN} />
      <Route component={RegistrationPage} path={URLS.REGISTRATION} />
      <Route component={HomePage} path={URLS.HOME} />
      <PrivateRoute exact component={EditorPage} path={URLS.EDITOR} />
      <PrivateRoute component={EditorPage} path={URLS.EDITOR_SLUG} />
      <PrivateRoute component={SettingsPage} path={URLS.SETTINGS} />
      <PrivateRoute component={ProfilePage} path={URLS.PROFILE} />
      <Route component={ArticlePage} path={URLS.ARTICLE} />
      <Route component={NoMatchPage} path="*" />
    </Switch>
  );
};
