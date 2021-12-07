import ArticlePage from 'pages/article';
import EditorPage from 'pages/editor';
import HomePage from 'pages/home';
import LoginPage from 'pages/login';
import NoMatchPage from 'pages/not-match';
import ProfilePage from 'pages/profile';
import RegistrationPage from 'pages/registration';
import SettingsPage from 'pages/settings';
import {
  Switch,
  Redirect,
  Route,
  URLS,
  PrivateRoute,
} from 'shared/library/router';

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
