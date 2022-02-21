import { Route, Redirect, RouteProps } from 'react-router-dom';
import { ROUTES } from './config';

type Props = Readonly<
  RouteProps & {
    isAuth: boolean;
  }
>;

export const PrivateRoute = ({ isAuth, children, ...props }: Props) => {
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
