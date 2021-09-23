import { Button } from 'shared/ui';
import { selectors } from '../model';

export const ButtonSubmit: React.FC = () => {
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
