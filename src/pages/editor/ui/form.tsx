import React from 'react';
import { Form as UIForm } from 'ui';
import { model } from '../model';
import { InputField } from './input-field';
import { TextField } from './text-field';

import '../model/init';

export const Form: React.FC = () => (
  <UIForm id="editor" onSubmit={(e) => e.preventDefault()}>
    <InputField
      name="title"
      placeholder="Article Title"
      onChange={model.handleFieldChanged}
      className="form-control-lg"
    />

    <InputField
      name="description"
      placeholder="What's this article about?"
      onChange={model.handleFieldChanged}
    />

    <TextField
      name="body"
      rows={8}
      placeholder="Write your article (in markdown)"
      onChange={model.handleFieldChanged}
    />
  </UIForm>
);
