import { Route, Redirect, RouteProps } from 'react-router-dom';
import * as user from 'entities/user';
import { URLS } from './router';

export const PrivateRoute: React.FC<RouteProps> = (props) => {
  const isAuth = user.selectors.useIsAuth();

  return !isAuth ? (
    <Redirect
      to={{
        pathname: URLS.LOGIN,
      }}
    />
  ) : (
    <Route {...props} />
  );
};
