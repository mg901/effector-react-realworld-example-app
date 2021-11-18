import { useGate } from 'effector-react';
import { ErrorList } from 'shared/ui';
import { selectors, model } from '../model';

export const Error: React.FC = () => {
  useGate(model.Gate);
  const has = selectors.useHasError();
  const errors = selectors.useErrors();

  return has ? <ErrorList errors={errors} /> : null;
};
