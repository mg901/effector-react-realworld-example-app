import { useGate } from 'effector-react';
import { Form as UIForm } from 'ui';
import * as model from '../model';
import { EmailField } from './email-field';
import { PasswordField } from './password-field';
import { SubmitButton } from './submit-button';
import { UsernameField } from './username-field';

export const Form: React.FC = () => {
  useGate(model.FormGate);

  return (
    <UIForm
      onSubmit={(e) => {
        e.preventDefault();
        model.formSubmitted();
      }}>
      <UsernameField />
      <EmailField />
      <PasswordField />
      <SubmitButton />
    </UIForm>
  );
};
