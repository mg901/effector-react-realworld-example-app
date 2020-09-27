import React from 'react';
import { Form as UIForm } from 'ui';
import { model } from '../model';
import { InputField } from './input-field';
import { SubmitButton } from './submit-button';

export const Form: React.FC = () => (
  <UIForm onSubmit={model.formSubmitted}>
    <InputField
      className="form-control-lg"
      name="username"
      onChange={model.handleFieldChanged}
    />

    <InputField
      className="form-control-lg"
      name="email"
      type="email"
      onChange={model.handleFieldChanged}
    />

    <InputField
      autoComplete="current-password"
      className="form-control-lg"
      name="password"
      type="password"
      onChange={model.handleFieldChanged}
    />
    <SubmitButton />
  </UIForm>
);
