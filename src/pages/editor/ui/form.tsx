import React from 'react';
import { Form as UIForm } from 'ui';
import { model } from '../model';
import { InputField } from './input-field';
import { TextField } from './text-field';

import '../model/init';

export const Form: React.FC = () => (
  <UIForm id="editor" onSubmit={(e) => e.preventDefault()}>
    <InputField
      className="form-control-lg"
      name="title"
      placeholder="Article Title"
      onChange={model.handleFieldChanged}
    />

    <InputField
      name="description"
      placeholder="What's this article about?"
      onChange={model.handleFieldChanged}
    />

    <TextField
      name="body"
      placeholder="Write your article (in markdown)"
      rows={8}
      onChange={model.handleFieldChanged}
    />
  </UIForm>
);
