import { ErrorList } from 'shared/ui';
import * as model from '../model';

export const Error: React.FC = () => {
  const has = model.selectors.useHasError();
  const errors = model.selectors.useErrors();

  return has ? <ErrorList errors={errors} /> : null;
};
