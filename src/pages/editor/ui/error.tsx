import { ErrorList } from '@/shared/ui';
import { selectors } from '../model';

export const Error = () => {
  const has = selectors.useHasError();
  const errors = selectors.useErrors();

  return has ? <ErrorList errors={errors} /> : null;
};
