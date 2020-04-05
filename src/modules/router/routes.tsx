import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Main, SignIn, SignUp, Editor, Settings } from '../../pages';

export const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path="/login" component={SignIn} />
    <Route path="/register" component={SignUp} />
    <Route path="/editor" component={Editor} />
    <Route path="/settings" component={Settings} />
  </Switch>
);
