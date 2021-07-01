import { Button } from 'shared/ui';
import { selectors } from '../model';

export const SubmitButton: React.FC = () => {
  const disabled = selectors.useSignInPending();

  return (
    <Button
      className="btn-lg btn-primary pull-xs-right"
      disabled={disabled}
      type="submit">
      Sign In
    </Button>
  );
};
