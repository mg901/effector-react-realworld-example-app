import { Button } from 'shared/ui';
import { selectors } from '../model';

export const SubmitButton: React.FC = () => {
  const loading = selectors.useLoading();

  return (
    <Button
      className="btn-lg btn-primary pull-xs-right"
      disabled={loading}
      type="submit">
      Sign In
    </Button>
  );
};
