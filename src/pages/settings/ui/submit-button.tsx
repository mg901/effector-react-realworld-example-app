import { Button } from 'shared/ui';
import { selectors } from '../model';

export const SubmitButton: React.FC = () => {
  const disabled = selectors.useOnSubmitPending();

  return (
    <Button
      className="btn-lg btn-primary pull-xs-right"
      disabled={disabled}
      type="submit">
      Update Settings
    </Button>
  );
};
