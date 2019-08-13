import React from 'react';
import { useStore } from 'effector-react';
import { ListErrors } from '../components';
import { errors } from './model.store';

export const AuthPage = ({ title, children }) => {
  const e = useStore(errors);

  return (
    <div className="container auth-page">
      <h1 className="text-xs-center">{title}</h1>
      <ListErrors errors={e} />
      {children}
    </div>
  );
};
