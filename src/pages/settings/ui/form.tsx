import { useGate } from 'effector-react';
import { Form as UIForm } from 'shared/ui';
import { model } from '../model';
import { BioField } from './bio-field';
import { EmailField } from './email-field';
import { ImageField } from './image-field';
import { PasswordField } from './password-field';
import { SubmitButton } from './submit-button';
import { UsernameField } from './username-field';

export const Form: React.FC = () => {
  useGate(model.FormGate);

  return (
    <UIForm onSubmit={model.formSubmitted}>
      <ImageField />
      <UsernameField />
      <BioField />
      <EmailField />
      <PasswordField />
      <SubmitButton />
    </UIForm>
  );
};
