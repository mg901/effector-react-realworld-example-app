import { ErrorList } from 'shared/ui';
import { selectors } from '../model';

export const Errors: React.FC = () => {
  const errors = selectors.useErrors();

  return <ErrorList errors={errors} />;
};
