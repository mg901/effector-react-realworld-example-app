import React from 'react';
import { useStore } from 'effector-react';
import { Button } from 'ui';
import { model } from '../model';

export const SubmitButton: React.FC = () => {
  const disabled = useStore(model.signInFx.pending);

  return (
    <Button
      type="submit"
      className="btn btn-lg btn-primary pull-xs-right"
      disabled={disabled}>
      Sign In
    </Button>
  );
};
