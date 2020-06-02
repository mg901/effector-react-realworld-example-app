import React from 'react';
import { Router, Link, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Home } from './pages/home';
import { Login } from './pages/login/login';
import { Registration } from './pages/registration';

const history = createBrowserHistory();

export const App: React.FC = () => (
  <Router history={history}>
    <header>
      <Link to="/">Home</Link>

      <nav>
        <Link to="/login">Sign In</Link>
        <Link to="/registration">Sign Up</Link>
      </nav>
    </header>
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/registration" component={Registration} />
      </Switch>
    </main>
  </Router>
);
