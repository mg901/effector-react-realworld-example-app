import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useStore } from 'effector-react';
import { model } from 'entities/user';
import { Urls } from '../urls';

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
              pathname: Urls.LOGIN,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
