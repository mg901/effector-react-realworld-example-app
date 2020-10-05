import React from 'react';
import { hot } from 'react-hot-loader';
import { Router } from 'react-router-dom';
import { model } from './library/router';
import { Main } from './pages/main';

import './library/router/model/init';
import './features/user/init';

import './styles.css';

const enhance = hot(module);

export const App: React.FC = enhance(() => (
  <Router history={model.history}>
    <Main />
  </Router>
));
