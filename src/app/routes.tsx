import { lazy, Suspense } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import * as visitor from '@/entities/visitor';
import { URLS, PrivateRoute } from '@/shared/router';
import { Spinner } from '@/shared/ui';

const Login = lazy(() => import('@/pages/login'));
const Registration = lazy(() => import('@/pages/registration'));
const Home = lazy(() => import('@/pages/home'));
const Editor = lazy(() => import('@/pages/editor'));
const Settings = lazy(() => import('@/pages/settings'));
const Profile = lazy(() => import('@/pages/profile'));
const Article = lazy(() => import('@/pages/article'));
const NoMatch = lazy(() => import('@/pages/no-match'));

export const Routes = () => {
  const isAuth = visitor.selectors.useIsAuthorized();

  return (
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Redirect exact from={URLS.ROOT} to={URLS.HOME} />
        <Route path={URLS.LOGIN}>
          {!isAuth ? <Login /> : <Redirect to={URLS.HOME} />}
        </Route>
        <Route path={URLS.REGISTRATION}>
          {!isAuth ? <Registration /> : <Redirect to={URLS.HOME} />}
        </Route>
        <Route path={URLS.HOME}>
          <Home />
        </Route>
        <PrivateRoute path={[URLS.EDITOR, URLS.EDITOR_SLUG]}>
          <Editor />
        </PrivateRoute>
        <PrivateRoute path={URLS.SETTINGS}>
          <Settings />
        </PrivateRoute>
        <PrivateRoute path={URLS.PROFILE}>
          <Profile />
        </PrivateRoute>
        <Route path={URLS.ARTICLE_SLUG}>
          <Article />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Suspense>
  );
};
