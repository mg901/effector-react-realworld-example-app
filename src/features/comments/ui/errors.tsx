import React from 'react';
import { useStore } from 'effector-react';
import { ErrorList } from '../../../ui';
import { model } from '../model';

export const Errors: React.FC = () => {
  const errors = useStore(model.$errors);

  return <ErrorList errors={errors} />;
};
