import { Router, Route } from 'react-router-dom';
import { useGate } from 'effector-react';
import * as visitor from 'entities/visitor';
import { APP_NAME } from 'shared/constants';
import { history } from 'shared/library/router';
import { QueryParamProvider } from 'use-query-params';

import { Routes } from '../../routes';
import * as model from '../../store';
import { Header } from '../header';
import { LoginLinks } from '../login-links';
import { Logo } from '../logo';
import { LogoutLinks } from '../logout-links';

import '../../main.css';

export const App = () => {
  useGate(model.Gate);
  const isAuth = visitor.selectors.useIsAuthorized();

  return (
    <Router history={history}>
      <QueryParamProvider ReactRouterRoute={Route}>
        <Header>
          <Logo title={APP_NAME} />
          <ul className="nav navbar-nav pull-xs-right">
            {isAuth ? <LoginLinks /> : <LogoutLinks />}
          </ul>
        </Header>

        <Routes />
      </QueryParamProvider>
    </Router>
  );
};
