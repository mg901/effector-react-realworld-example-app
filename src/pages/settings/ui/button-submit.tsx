import { Button } from '@/shared/ui';
import * as model from '../model';

export const ButtonSubmit = () => {
  const disabled = model.selectors.useChangeUserDataLoading();

  return (
    <Button
      className="btn-primary pull-xs-right"
      disabled={disabled}
      size="lg"
      type="submit"
    >
      Update Settings
    </Button>
  );
};
