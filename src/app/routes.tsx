import { lazy, Suspense, useState, useCallback } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import type { FallbackProps } from 'react-error-boundary';
import { Switch, Redirect, Route } from 'react-router-dom';

import { ROUTES, PrivateRoute } from '@/shared/router';
import { Spinner, Page, Button } from '@/shared/ui';

const LoginPage = lazy(() => import('@/pages/login'));
const RegistrationPage = lazy(() => import('@/pages/registration'));
const HomePage = lazy(() => import('@/pages/home'));
const EditorPage = lazy(() => import('@/pages/editor'));
const SettingsPage = lazy(() => import('@/pages/settings'));
const ProfilePage = lazy(() => import('@/pages/profile'));
const ArticlePage = lazy(() => import('@/pages/article'));
const NoMatchPage = lazy(() => import('@/pages/no-match'));

export const Routes = () => {
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
          <Redirect exact from={ROUTES.ROOT} to={ROUTES.HOME} />
          <Route path={ROUTES.LOGIN}>
            <LoginPage />
          </Route>
          <Route path={ROUTES.REGISTRATION}>
            <RegistrationPage />
          </Route>
          <Route path={ROUTES.HOME}>
            <HomePage />
          </Route>
          <PrivateRoute path={[ROUTES.EDITOR, ROUTES.EDITOR_SLUG]}>
            <EditorPage />
          </PrivateRoute>
          <PrivateRoute path={ROUTES.SETTINGS}>
            <SettingsPage />
          </PrivateRoute>
          <PrivateRoute path={ROUTES.PROFILE}>
            <ProfilePage />
          </PrivateRoute>
          <Route path={ROUTES.ARTICLE_SLUG}>
            <ArticlePage />
          </Route>
          <Route path="*">
            <NoMatchPage />
          </Route>
        </Switch>
      </Suspense>
    </ErrorBoundary>
  );
};

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  const handleClick = () => {
    resetErrorBoundary();
  };

  return (
    <Page>
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>{' '}
      <Button onClick={handleClick}>Try again</Button>
    </Page>
  );
}
