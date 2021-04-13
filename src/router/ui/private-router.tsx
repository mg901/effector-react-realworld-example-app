import { Route, Redirect } from 'react-router-dom';
import { useStore } from 'effector-react';
import { model } from 'shared/user';
import { Paths } from 'router';

export const PrivateRoute: React.FC = ({ children, ...props }) => {
  const isAuth = useStore(model.$isAuthorized);

  return (
    <Route
      {...props}
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
