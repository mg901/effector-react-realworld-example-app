import React from 'react';
import { useStore } from 'effector-react';
import { ErrorList } from '../../../ui';
import { $errors } from '../model';

type Props = {
  title: string;
  children: React.ReactNode;
};

export const PageTemplate: React.FC<Props> = ({ title, children }) => {
  const errors = useStore($errors);

  return (
    <div className="container auth-page">
      <h1 className="text-xs-center">{title}</h1>
      <ErrorList errors={errors} />
      {children}
    </div>
  );
};
