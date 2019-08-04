import React from 'react';
import { Route, Switch } from 'react-router';
import { Header } from './components/header';

import Article from './components/Article';
import Editor from './components/Editor';
import { Home } from './home';
import { SignIn } from './auth/sign-in';
import { SignUp } from './auth/sign-up';
import { Profile } from './components/Profile';
import ProfileFavorites from './components/ProfileFavorites';
import Settings from './settings';

export const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={SignIn} />
      <Route path="/register" component={SignUp} />
      {/* <Route path="/editor/:slug" component={Editor} />
      <Route path="/editor" component={Editor} />
      <Route path="/article/:id" component={Article} />
      <Route path="/settings" component={Settings} />
      <Route path="/@:username/favorites" component={ProfileFavorites} />
      <Route path="/@:username" component={Profile} />  */}
    </Switch>
  </>
);
