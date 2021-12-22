import { Switch, Redirect, Route } from 'react-router-dom';
import ArticlePage from 'pages/article';
import EditorPage from 'pages/editor';
import HomePage from 'pages/home';
import LoginPage from 'pages/login';
import NoMatchPage from 'pages/not-match';
import ProfilePage from 'pages/profile';
import RegistrationPage from 'pages/registration';
import SettingsPage from 'pages/settings';
import { URLS, PrivateRoute } from 'shared/library/router';

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Redirect exact from={URLS.ROOT} to={URLS.HOME} />
      <Route path={URLS.LOGIN}>
        <LoginPage />
      </Route>
      <Route path={URLS.REGISTRATION}>
        <RegistrationPage />
      </Route>
      <Route path={URLS.HOME}>
        <HomePage />
      </Route>
      <PrivateRoute exact path={URLS.EDITOR}>
        <EditorPage />
      </PrivateRoute>
      <PrivateRoute path={URLS.EDITOR_SLUG}>
        <EditorPage />
      </PrivateRoute>
      <PrivateRoute path={URLS.SETTINGS}>
        <SettingsPage />
      </PrivateRoute>
      <PrivateRoute path={URLS.PROFILE}>
        <ProfilePage />
      </PrivateRoute>
      <Route path={URLS.ARTICLE}>
        <ArticlePage />
      </Route>
      <Route path="*">
        <NoMatchPage />
      </Route>
    </Switch>
  );
};
