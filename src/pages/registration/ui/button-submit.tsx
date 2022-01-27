import { Button } from '@/shared/ui';
import { selectors } from '../model';

export const ButtonSubmit = () => {
  const disabled = selectors.useSignUpLoading();

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
