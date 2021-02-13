import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useStore } from 'effector-react';
import { model } from 'shared-modules/user';
import { Paths } from '../constants';

type Props = RouteProps;

export const PrivateRoute: React.FC<Props> = ({ children, ...rest }) => {
  const isAuth = useStore(model.$isAuthorized);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuth ? (
          children
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
