import { lazy, Suspense, useState, useCallback, useLayoutEffect } from 'react';
import type { FallbackProps } from 'react-error-boundary';
import { ErrorBoundary } from 'react-error-boundary';
import { hot } from 'react-hot-loader/root';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';
import * as http from '@/shared/http';
import { ROUTES, PrivateRoute } from '@/shared/router';
import { Spinner, Page, Button, Pre } from '@/shared/ui';
import * as session from '@/entities/session';
import { Layout } from '../layout';

import './app.css';

http.client.init({
  baseURL: process.env.API_ROOT ?? 'https://api.realworld.io/api',
  onError: (error) => {
    if (error.status === 401) {
      session.store.resetSession();
    }
  },
});

export const App = hot(() => {
  return (
    <Router basename="/effector-react-realworld-example-app">
      <QueryParamProvider ReactRouterRoute={Route}>
        <Layout>
          <Routes />
        </Layout>
      </QueryParamProvider>
    </Router>
  );
});

const LoginPage = lazy(() => import('@/pages/login'));
const RegistrationPage = lazy(() => import('@/pages/registration'));
const HomePage = lazy(() => import('@/pages/home'));
const EditorPage = lazy(() => import('@/pages/editor'));
const SettingsPage = lazy(() => import('@/pages/settings'));
const ProfilePage = lazy(() => import('@/pages/profile'));
const ArticlePage = lazy(() => import('@/pages/current-article'));
const NoMatchPage = lazy(() => import('@/pages/no-match'));

type RouteType = Readonly<{
  path: string | string[];
  isPrivate: boolean;
  component: React.ComponentType;
  exact?: boolean;
}>;

export const routes: RouteType[] = [
  {
    path: ROUTES.login,
    isPrivate: false,
    component: LoginPage,
  },
  {
    path: ROUTES.registration,
    isPrivate: false,
    component: RegistrationPage,
  },
  {
    path: [ROUTES.root, ROUTES.globalFeed, ROUTES.feedByTag],
    exact: true,
    isPrivate: false,
    component: HomePage,
  },
  {
    path: ROUTES.profile.root,
    isPrivate: false,
    component: ProfilePage,
  },
  {
    path: ROUTES.currentArticle,
    isPrivate: false,
    component: ArticlePage,
  },
  {
    path: [ROUTES.editor.root, ROUTES.editor.slug],
    isPrivate: true,
    component: EditorPage,
  },
  {
    path: ROUTES.settings,
    isPrivate: true,
    component: SettingsPage,
  },
  {
    path: '*',
    exact: false,
    isPrivate: false,
    component: NoMatchPage,
  },
];

function Routes() {
  const history = useHistory();
  const isAuth = session.selectors.useIsAuthorized();
  const [state, setState] = useState(false);
  const forceUpdate = useCallback(() => setState((prev) => !prev), []);

  useLayoutEffect(() => {
    return session.store.resetSession.watch(() => {
      history.push(ROUTES.login);
    });
  }, [history]);

  return (
    <ErrorBoundary
      fallbackRender={ErrorFallback}
      resetKeys={[state]}
      onReset={forceUpdate}
    >
      <Suspense fallback={<Spinner />}>
        <Switch>
          {routes.map((route) =>
            route.isPrivate ? (
              <PrivateRoute
                exact={route.exact}
                isAuth={isAuth}
                key={route.path.toString()}
                path={route.path}
              >
                <route.component />
              </PrivateRoute>
            ) : (
              <Route
                exact={route.exact}
                key={route.path.toString()}
                path={route.path}
              >
                <route.component />
              </Route>
            ),
          )}
        </Switch>
      </Suspense>
    </ErrorBoundary>
  );
}

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  const handleClick = () => {
    resetErrorBoundary();
  };

  return (
    <Page>
      <p>Something went wrong:</p>
      <Pre>{error.message}</Pre>
      <Button onClick={handleClick}>Try again</Button>
    </Page>
  );
}
