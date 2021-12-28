import { useGate } from 'effector-react';
import { ErrorList } from '@/shared/ui';
import * as model from '../model';

export const Error = () => {
  useGate(model.Gate);
  const has = model.selectors.useHasError();
  const errors = model.selectors.useErrors();

  return has ? <ErrorList errors={errors} /> : null;
};
