import { ErrorList } from 'shared/ui';
import { selectors } from '../model';

export const Error: React.FC = () => {
  const error = selectors.useError();

  return <ErrorList error={error} />;
};
