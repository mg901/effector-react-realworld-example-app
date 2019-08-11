import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import { history } from './models/router';
import { App } from './app';
import 'normalize.css';
import './styles/global.css';
import './styles/layout.css';
import './styles/typography.css';

ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route path="/" component={App} />
    </Switch>
  </Router>,
  document.getElementById('root'),
);
