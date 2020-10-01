import React from 'react';
import { Form as UIForm, InputField, TextField } from 'ui';
import { model } from '../model';
import { SubmitButton } from './submit-button';

export const Form: React.FC = () => (
  <UIForm onSubmit={model.formSubmitted}>
    <InputField
      name="image"
      store={model.$user}
      onChange={model.handleFieldChanged}
    />

    <InputField
      className="form-control-lg"
      name="username"
      store={model.$user}
      onChange={model.handleFieldChanged}
    />
    <TextField
      className="form-control-lg"
      name="bio"
      store={model.$user}
      onChange={model.handleFieldChanged}
    />

    <InputField
      className="form-control-lg"
      name="email"
      store={model.$user}
      onChange={model.handleFieldChanged}
    />
    <InputField
      className="form-control-lg"
      name="password"
      store={model.$user}
      onChange={model.handleFieldChanged}
    />

    <SubmitButton />
  </UIForm>
);
