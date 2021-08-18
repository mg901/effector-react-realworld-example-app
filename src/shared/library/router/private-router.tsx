import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useStore } from 'effector-react';
import { model } from 'entities/user';
import { URLS } from './router';

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
              pathname: URLS.LOGIN,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
