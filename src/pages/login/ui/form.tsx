import React from 'react';
import { Form as UIForm } from 'ui';
import { model } from '../model';
import { InputField } from './input-field';
import { SubmitButton } from './submit-button';

export const Form: React.FC = () => (
  <UIForm onSubmit={model.formSubmitted}>
    <InputField
      type="email"
      name="email"
      className="form-control-lg"
      onChange={model.handleFieldChanged}
    />
    <InputField
      type="password"
      name="password"
      autoComplete="current-password"
      className="form-control-lg"
      onChange={model.handleFieldChanged}
    />
    <SubmitButton />
  </UIForm>
);
