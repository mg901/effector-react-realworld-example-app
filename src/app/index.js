import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header } from '../header';
import { Home } from '../home';
import { SignIn } from '../auth/sign-in';
import { SignUp } from '../auth/sign-up';
import { Editor } from '../editor';
import { Settings } from '../settings';
import { Profile } from '../profile';
// import { SignIn } from '../features/auth/sign-in';
// import { SignUp } from '../features/auth/sign-up';
// import { Editor } from '../features/editor';
// import { Settings } from '../features/settings';
// import { Profile } from '../features/profile';
// import { getUser } from '../features/auth/model';
import { getTags } from '../tags/model';
import { getPosts } from '../posts/model';

export const App = () => {
  useEffect(() => {
    Promise.all([getPosts(), getTags()]);
  }, []);

  return (
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
        {/* <Route path="/article/:id" component={Article} /> */}
        {/* <Route path="/@:username/favorites" component={ProfileFavorites} /> */}
      </Switch>
    </div>
  );
};
