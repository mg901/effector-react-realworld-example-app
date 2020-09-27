import React from 'react';
import { Form as UIForm } from 'ui';
import { model } from '../model';
import { InputField } from './input-field';
import { SubmitButton } from './submit-button';
import { TextField } from './text-field';

export const Form: React.FC = () => (
  <UIForm onSubmit={model.formSubmitted}>
    <InputField name="image" onChange={model.handleFieldChanged} />
    <InputField
      className="form-control-lg"
      name="username"
      onChange={model.handleFieldChanged}
    />
    <TextField
      className="form-control-lg"
      name="bio"
      onChange={model.handleFieldChanged}
    />

    <InputField
      className="form-control-lg"
      name="email"
      onChange={model.handleFieldChanged}
    />
    <InputField
      className="form-control-lg"
      name="password"
      onChange={model.handleFieldChanged}
    />

    <SubmitButton />
  </UIForm>
);
