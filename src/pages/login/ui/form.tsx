import React from 'react';
import { Form as UIForm } from 'ui';
import { model } from '../model';
import { EmailField } from './email-field';
import { PasswordField } from './password-field';

import { SubmitButton } from './submit-button';

export const Form: React.FC = () => (
  <UIForm onSubmit={model.formSubmitted}>
    <EmailField />
    <PasswordField />
    <SubmitButton />
  </UIForm>
);
