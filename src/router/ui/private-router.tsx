import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useStore } from 'effector-react';
import { model } from 'shared/user';
import { Paths } from '../constants';

export const PrivateRoute: React.FC<RouteProps> = ({
  component: Component,
  ...props
}) => {
  const isAuth = useStore(model.$isAuthorized);

  return (
    <Route
      {...props}
      render={({ location }) =>
        isAuth ? (
          // @ts-ignore
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: Paths.LOGIN,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
