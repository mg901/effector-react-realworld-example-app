import { Route, Redirect, RouteProps } from 'react-router-dom';
import * as visitor from '@/entities/visitor';
import { ROUTES } from '../routes';

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
              pathname: ROUTES.LOGIN,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
