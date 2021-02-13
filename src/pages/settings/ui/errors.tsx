import { useStore } from 'effector-react';
import { ErrorList } from 'ui';
import { $error } from '../model';

export const Errors: React.FC = () => {
  const errors = useStore($error);

  return <ErrorList errors={errors} />;
};
