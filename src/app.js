import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header } from './header';
import { Home } from './home';
import { SignIn } from './auth/sign-in';
import { SignUp } from './auth/sign-up';
import { Editor } from './editor';
import { Settings } from './settings';
import { Profile } from './profile';

export const App = () => (
  <div className="app">
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/editor" component={Editor} />
      <Route path="/settings" component={Settings} />
      <Route path="/@:username" component={Profile} />
      <Route path="/editor/:slug" component={Editor} />
    </Switch>
  </div>
);
