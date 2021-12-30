import { lazy, Suspense } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import * as visitor from '@/entities/visitor';
import { ROUTES, PrivateRoute } from '@/shared/router';
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

  const login = !isAuth ? <Login /> : <Redirect to={ROUTES.HOME} />;
  const registration = !isAuth ? (
    <Registration />
  ) : (
    <Redirect to={ROUTES.HOME} />
  );

  return (
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Redirect exact from={ROUTES.ROOT} to={ROUTES.HOME} />
        <Route path={ROUTES.LOGIN}>{login}</Route>
        <Route path={ROUTES.REGISTRATION}>{registration}</Route>
        <Route path={ROUTES.HOME}>
          <Home />
        </Route>
        <PrivateRoute path={[ROUTES.EDITOR, ROUTES.EDITOR_SLUG]}>
          <Editor />
        </PrivateRoute>
        <PrivateRoute path={ROUTES.SETTINGS}>
          <Settings />
        </PrivateRoute>
        <PrivateRoute path={ROUTES.PROFILE}>
          <Profile />
        </PrivateRoute>
        <Route path={ROUTES.ARTICLE_SLUG}>
          <Article />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Suspense>
  );
};
