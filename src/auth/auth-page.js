import React from 'react';
import { ListErrors } from '../components/list-errors';

export const AuthPage = ({ title, children }) => (
  <div className="auth-page">
    <div className="container page">
      <div className="row">
        <div className="col-md-6 offset-md-3 col-xs-12">
          <h1 className="text-xs-center">{title}</h1>
          <ListErrors />
          {children}
        </div>
      </div>
    </div>
  </div>
);
