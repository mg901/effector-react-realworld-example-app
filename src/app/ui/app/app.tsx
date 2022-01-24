import { lazy, Suspense, useState, useCallback } from 'react';
import type { FallbackProps } from 'react-error-boundary';
import { ErrorBoundary } from 'react-error-boundary';
import { Router, Route, Switch } from 'react-router-dom';
import { useGate } from 'effector-react';
import { history, ROUTES, PrivateRoute } from '@/shared/router';
import { Spinner, Page, Button, Pre } from '@/shared/ui';
import * as model from '../../model';
import { Layout } from '../layout';

import './app.css';

export const App = () => {
  useGate(model.Gate);

  return (
    <Router history={history}>
      <Layout>
        <Routes />
      </Layout>
    </Router>
  );
};

const LoginPage = lazy(() => import('@/pages/login'));
const RegistrationPage = lazy(() => import('@/pages/registration'));
const HomePage = lazy(() => import('@/pages/home'));
const EditorPage = lazy(() => import('@/pages/editor'));
const SettingsPage = lazy(() => import('@/pages/settings'));
const ProfilePage = lazy(() => import('@/pages/profile'));
const ArticlePage = lazy(() => import('@/pages/article'));
const NoMatchPage = lazy(() => import('@/pages/no-match'));

type RouteType = Readonly<{
  path: string | string[];
  exact?: boolean;
  isPrivate: boolean;
  component: React.ComponentType;
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
    path: ROUTES.article,
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
  const [state, setState] = useState(false);
  const forceUpdate = useCallback(() => setState((x) => !x), []);

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
