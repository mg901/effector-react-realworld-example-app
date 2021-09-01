import { useGate } from 'effector-react';
import { Form as UIForm } from 'ui';
import * as model from '../model';
import { EmailField } from './email-field';
import { PasswordField } from './password-field';

import { SubmitButton } from './submit-button';

export const Form: React.FC = () => {
  useGate(model.FormGate);

  return (
    <UIForm
      onSubmit={(e) => {
        e.preventDefault();
        model.formSubmitted();
      }}>
      <EmailField />
      <PasswordField />
      <SubmitButton />
    </UIForm>
  );
};
