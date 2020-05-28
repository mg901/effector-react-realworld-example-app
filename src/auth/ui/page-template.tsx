import React from 'react';
import { useStore } from 'effector-react';
import { ErrorList } from '../../ui';
import { $responseFail } from '../state';

type Props = Readonly<{
  title: string;
  children: React.ReactNode;
}>;

export const PageTemplate: React.FC<Props> = ({ title, children }) => {
  const errors = useStore($responseFail);

  return (
    <div className="container auth-page">
      <h1 className="text-xs-center">{title}</h1>
      <ErrorList errors={errors} />
      {children}
    </div>
  );
};
