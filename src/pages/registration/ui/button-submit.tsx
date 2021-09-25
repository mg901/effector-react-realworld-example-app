import { Button } from 'shared/ui';
import { selectors } from '../model';

export const ButtonSubmit: React.FC = () => {
  const disabled = selectors.useSignUpPending();

  return (
    <Button
      className="btn-primary pull-xs-right"
      disabled={disabled}
      size="lg"
      type="submit"
    >
      Sign Up
    </Button>
  );
};
