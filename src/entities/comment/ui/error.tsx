import { ErrorList } from '@/shared/ui';
import * as comments from '../model';

export const Error = () => {
  const has = comments.store.selectors.useHasError();
  const errors = comments.store.selectors.useErrors();

  return has ? <ErrorList errors={errors} /> : null;
};
