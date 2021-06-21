import { ErrorList } from 'shared/ui';
import * as settings from '../model';

export const Errors: React.FC = () => {
  const errors = settings.selectors.useErrors();

  return <ErrorList errors={errors} />;
};
