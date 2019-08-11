import React from 'react';
import { useStore } from 'effector-react';
import { ListErrors } from '../components/list-errors';
import { $errors } from './model';

export const AuthPage = ({ title, children }) => {
  const errors = useStore($errors);

  return (
    <div className="container auth-page">
      <h1 className="text-xs-center">{title}</h1>
      <ListErrors errors={errors} />
      {children}
    </div>
  );
};
