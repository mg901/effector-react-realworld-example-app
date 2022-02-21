import { useEffect } from 'react';
import { ErrorList } from '@/shared/ui';
import * as model from './model';

export const Error = () => {
  const error = model.selectors.useError();
  const errors = model.selectors.useErrorList();

  useEffect(() => {
    return model.store.resetError();
  }, []);

  return error && <ErrorList errors={errors} />;
};
