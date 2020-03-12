import React from 'react';
import { useStore } from 'effector-react';
import { Route, Redirect } from 'react-router-dom';
import { $token } from '../auth/model';
import { GLOBAL_FEED } from './constants';

type Props = Readonly<{
  component: React.ComponentType<any>;
  path: string;
  exact?: boolean;
}>;

export const PrivateRoute: React.FC<Props> = ({
  component: Component,
  path,
  exact,
  location,
  computedMatch,
}) => {
  const token = useStore($token);

  return (
    <Route
      path={path}
      exact={exact}
      location={location}
      computedMatch={computedMatch}
      render={(props) =>
        token ? (
          <Component
            history={props.history}
            location={props.location}
            match={props.match}
            staticContext={props.staticContext}
          />
        ) : (
          <Redirect
            to={{
              pathname: GLOBAL_FEED,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
