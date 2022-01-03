import { Route, Redirect, RouteProps } from 'react-router-dom';
import * as visitor from '@/entities/visitor';
import { ROUTES } from '../config';

export const PrivateRoute = ({ children, ...props }: RouteProps) => {
  const isAuth = visitor.selectors.useIsAuthorized();

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
