import { useStore } from 'effector-react';
import { Button } from 'ui';
import { changeUserDataFx } from '../model';

export const SubmitButton: React.FC = () => {
  const disabled = useStore(changeUserDataFx.pending);

  return (
    <Button
      className="btn-lg btn-primary pull-xs-right"
      disabled={disabled}
      type="submit">
      Update Settings
    </Button>
  );
};
