import React from 'react';
import { useStore } from 'effector-react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Home } from '../home';
import { SignIn } from '../auth/sign-in';
import { SignUp } from '../auth/sign-up';
import { Editor } from '../editor';
import { Settings } from '../settings';
import { Profile } from '../profile';
import { $token } from '../auth/model';
import { PrivateRoute } from '../router/private-route';

export const Main = () => {
  const token = useStore($token);
  const target = token ? '/feed/user' : '/feed/global';

  return (
    <Switch>
      <Redirect exact from="/" to={target} />
      <Route path="/feed" component={Home} />
      <Route exact path="/login" component={SignIn} />
      <Route exact path="/register" component={SignUp} />
      <PrivateRoute path="/editor" component={Editor} />
      <PrivateRoute path="/settings" component={Settings} />
      <PrivateRoute path="/@:username" component={Profile} />
      {/* <Route path="/editor/:slug" component={Editor} /> */}
    </Switch>
  );
};
