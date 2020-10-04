import React from 'react';
import { Form as UIForm } from 'ui';
import { model } from '../model';
import { EmailField } from './email-field';
import { PasswordField } from './password-field';
import { SubmitButton } from './submit-button';
import { UsernameField } from './username-field';

export const Form: React.FC = () => (
  <UIForm onSubmit={model.formSubmitted}>
    <UsernameField />
    <EmailField />
    <PasswordField />
    <SubmitButton />
  </UIForm>
);
