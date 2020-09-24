import React from 'react';
import { Form as UIForm, Button } from 'ui';
import { model } from '../model';
import { InputField } from './input-field';

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
    <Button type="submit" className="btn btn-lg btn-primary pull-xs-right">
      Sign In
    </Button>
  </UIForm>
);
