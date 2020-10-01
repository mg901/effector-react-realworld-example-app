import React from 'react';
import { Form as UIForm, InputField } from 'ui';
import { model } from '../model';

import { SubmitButton } from './submit-button';

export const Form: React.FC = () => (
  <UIForm onSubmit={model.formSubmitted}>
    <InputField
      className="form-control-lg"
      name="username"
      store={model.$form}
      onChange={model.handleFieldChanged}
    />

    <InputField
      className="form-control-lg"
      name="email"
      store={model.$form}
      type="email"
      onChange={model.handleFieldChanged}
    />

    <InputField
      autoComplete="current-password"
      className="form-control-lg"
      name="password"
      store={model.$form}
      type="password"
      onChange={model.handleFieldChanged}
    />
    <SubmitButton />
  </UIForm>
);
