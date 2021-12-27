import { lazy, Suspense } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import * as visitor from 'entities/visitor';
import { URLS, PrivateRoute } from 'shared/library/router';
import { Spinner } from 'shared/ui';

const Login = lazy(() => import('pages/login'));
const Registration = lazy(() => import('pages/registration'));
const Home = lazy(() => import('pages/home'));
const Editor = lazy(() => import('pages/editor'));
const Settings = lazy(() => import('pages/settings'));
const Profile = lazy(() => import('pages/profile'));
const Article = lazy(() => import('pages/article'));
const NotMatch = lazy(() => import('pages/no-match'));

export const Routes = () => {
  const isAuth = visitor.selectors.useIsAuthorized();

  return (
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Redirect from={URLS.LOGIN} to={URLS.ROOT} />
        <Redirect exact from={URLS.REGISTRATION} to={URLS.ROOT} />
        <Redirect exact from={URLS.ROOT} to={URLS.HOME} />
        <Route path={URLS.HOME}>
          <Home />
        </Route>
        <Route exact path={URLS.ARTICLE_SLUG}>
          <Article />
        </Route>
        <Route exact path={URLS.PROFILE}>
          <Profile />
        </Route>
        {isAuth ? (
          <>
            <PrivateRoute exact path={URLS.EDITOR}>
              <Editor />
            </PrivateRoute>
            <PrivateRoute exact path={URLS.EDITOR_SLUG}>
              <Editor />
            </PrivateRoute>
            <PrivateRoute exact path={URLS.SETTINGS}>
              <Settings />
            </PrivateRoute>
          </>
        ) : (
          <>
            <Route exact path={URLS.LOGIN}>
              <Login />
            </Route>
            <Route exact path={URLS.REGISTRATION}>
              <Registration />
            </Route>
          </>
        )}
        <Route path="*">
          <NotMatch />
        </Route>
      </Switch>
    </Suspense>
  );
};
