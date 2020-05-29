import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { AuthProtectedRoute } from './library';
import { Login, Registration, GlobalFeed, YourFeed } from '../pages';
// import { Home } from '../home';
// import { Editor } from '../editor';
// import { Settings } from '../settings';
// import { Profile } from '../profile';

export const Routes: React.FC = () => (
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/registration" component={Registration} />
    {/* <PrivateRoute path="/editor" component={Editor} /> */}
    {/* <PrivateRoute path="/settings" component={Settings} /> */}
    {/* <PrivateRoute path="/@:username" component={Profile} /> */}
    <Route path="/global-feed" component={GlobalFeed} />
    <AuthProtectedRoute path="/your-feed" component={YourFeed} />
    <Redirect exact from="/" to="/global-feed" />
  </Switch>
);
