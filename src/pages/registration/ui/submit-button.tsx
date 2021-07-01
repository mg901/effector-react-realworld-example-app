import { useStore } from 'effector-react';
import { Button } from 'shared/ui';
import { signUpFx } from '../model';

export const SubmitButton: React.FC = () => {
  const disabled = useStore(signUpFx.pending);

  return (
    <Button
      className="btn-lg btn-primary pull-xs-right"
      disabled={disabled}
      type="submit">
      Sign Up
    </Button>
  );
};
