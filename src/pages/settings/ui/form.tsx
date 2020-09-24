import React from 'react';
import { Form as UIForm, Button } from 'ui';

import { model } from '../model';
import { InputField } from './input-field';
import { TextField } from './text-field';

export const Form: React.FC = () => (
  <UIForm onSubmit={model.formSubmitted}>
    <InputField name="image" onChange={model.handleFieldChanged} />
    <InputField
      name="username"
      className="form-control-lg"
      onChange={model.handleFieldChanged}
    />
    <TextField
      name="bio"
      className="form-control-lg"
      onChange={model.handleFieldChanged}
    />

    <InputField
      name="email"
      className="form-control-lg"
      onChange={model.handleFieldChanged}
    />
    <InputField
      name="password"
      className="form-control-lg"
      onChange={model.handleFieldChanged}
    />

    <Button type="submit" className="btn-lg btn-primary pull-xs-right">
      Update Settigs
    </Button>
  </UIForm>
);
