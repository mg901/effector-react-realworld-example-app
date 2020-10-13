import React from 'react';
import { useStore } from 'effector-react';
import { ErrorList } from '../../../ui';
import { $errors } from '../model';

export const Errors: React.FC = () => {
  const errors = useStore($errors);

  return <ErrorList errors={errors} />;
};
