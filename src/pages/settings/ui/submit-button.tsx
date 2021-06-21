import { Button } from 'shared/ui';
import * as settings from '../model';

export const SubmitButton: React.FC = () => {
  const disabled = settings.selectors.useSubmitForm();

  return (
    <Button
      className="btn-lg btn-primary pull-xs-right"
      disabled={disabled}
      type="submit">
      Update Settings
    </Button>
  );
};
