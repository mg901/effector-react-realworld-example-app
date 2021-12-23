import { Route, Redirect, RouteProps } from 'react-router-dom';
import * as visitor from 'entities/visitor';
import { URLS } from '../router';

export const PrivateRoute: React.FC<RouteProps> = (props) => {
  const isAuth = visitor.selectors.useIsAuthorized();

  return isAuth ? (
    <Route {...props} />
  ) : (
    <Redirect
      to={{
        pathname: URLS.LOGIN,
      }}
    />
  );
};
