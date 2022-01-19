import { lazy, Suspense, useState, useCallback } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import type { FallbackProps } from 'react-error-boundary';
import { Router, Route, Switch } from 'react-router-dom';
import { useGate } from 'effector-react';
import { QueryParamProvider } from 'use-query-params';
import { history, ROUTES, PrivateRoute } from '@/shared/router';
import { Spinner, Page, Button } from '@/shared/ui';
import * as model from '../../model';
import { Layout } from '../layout';

import './app.css';

export const App = () => {
  useGate(model.Gate);

  return (
    <Router history={history}>
      <QueryParamProvider ReactRouterRoute={Route}>
        <Layout>
          <Routes />
        </Layout>
      </QueryParamProvider>
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
          <Route path={ROUTES.login}>
            <LoginPage />
          </Route>
          <Route path={ROUTES.registration}>
            <RegistrationPage />
          </Route>
          <Route
            exact
            path={[
              ROUTES.root,
              ROUTES.globalFeed,
              ROUTES.yourFeed,
              ROUTES.feedByTag,
            ]}
          >
            <HomePage />
          </Route>
          <Route path={ROUTES.profile.root}>
            <ProfilePage />
          </Route>
          <Route path={ROUTES.currentArticle}>
            <ArticlePage />
          </Route>
          <PrivateRoute path={[ROUTES.editor.root, ROUTES.editor.slug]}>
            <EditorPage />
          </PrivateRoute>
          <PrivateRoute path={ROUTES.settings}>
            <SettingsPage />
          </PrivateRoute>
          <Route path="*">
            <NoMatchPage />
          </Route>
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
      <pre>{error.message}</pre>
      <Button onClick={handleClick}>Try again</Button>
    </Page>
  );
}
