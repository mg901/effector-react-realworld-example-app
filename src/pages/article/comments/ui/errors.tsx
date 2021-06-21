import { ErrorList } from 'shared/ui';
import * as comments from '../model';

export const Errors: React.FC = () => {
  const errors = comments.selectors.useErrors();

  return <ErrorList errors={errors} />;
};
