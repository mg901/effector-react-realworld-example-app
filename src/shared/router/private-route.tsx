import { Route, Redirect, RouteProps } from 'react-router-dom';
import * as session from '@/entities/session';
import { ROUTES } from './config';

export const PrivateRoute = ({ children, ...props }: RouteProps) => {
  const isAuth = session.selectors.useIsAuthorized();

  return (
    <Route
      {...props}
      render={({ location }) =>
        isAuth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: ROUTES.login,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
