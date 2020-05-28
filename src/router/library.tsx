import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useStore } from 'effector-react';
import { $$isAuthenticated } from '../auth';

export const AuthProtectedRoute: React.FC<RouteProps> = (props) => {
  const isAuthenticated = useStore($$isAuthenticated);

  if (isAuthenticated) {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Route exact {...props} />;
  }

  return <Redirect to="/" />;
};
