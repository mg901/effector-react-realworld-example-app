import { useEffect } from 'react';
import { Router, Route } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';
import * as visitor from '@/entities/visitor';
import { APP_NAME } from '@/shared/config';
import { history } from '@/shared/router';

import { Routes } from '../../routes';
import { Header } from '../header';
import { Logo } from '../logo';
import { Navigation } from './navigation';

import '../../main.css';

export const App = () => {
  const isAuth = visitor.selectors.useIsAuthorized();

  useEffect(() => {
    if (isAuth) {
      visitor.getVisitorFx();
    }
  }, [isAuth]);

  return (
    <Router history={history}>
      <QueryParamProvider ReactRouterRoute={Route}>
        <Header>
          <Logo title={APP_NAME} />
          <ul className="nav navbar-nav pull-xs-right">
            <Navigation />
          </ul>
        </Header>

        <Routes />
      </QueryParamProvider>
    </Router>
  );
};
