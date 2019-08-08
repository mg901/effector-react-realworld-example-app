import React from 'react';
import { useStore } from 'effector-react';
import { ListErrors } from '../list-errors';
import { $errors } from './model';

export const AuthPage = ({ title, children }) => {
  const errors = useStore($errors);

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">{title}</h1>
            <ListErrors errors={errors} />
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
