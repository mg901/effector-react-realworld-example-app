import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from 'react-dom';
import { App } from './modules/app';

const renderApp = (): void => {
  render(
    <Router>
      <App />
    </Router>,
    document.getElementById('root'),
  );
};

renderApp();

(module as any).hot.accept();
