import { useStore } from 'effector-react';
import { Button } from 'ui';
import { signInFx } from '../model';

export const SubmitButton: React.FC = () => {
  const disabled = useStore(signInFx.pending);

  return (
    <Button
      className="btn-lg btn-primary pull-xs-right"
      disabled={disabled}
      type="submit">
      Sign In
    </Button>
  );
};
