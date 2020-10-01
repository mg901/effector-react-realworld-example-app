import React from 'react';
import { Form as UIForm, InputField, TextField } from 'ui';
import { model } from '../model';

import '../model/init';

export const Form: React.FC = () => (
  <UIForm id="editor" onSubmit={(e) => e.preventDefault()}>
    <InputField
      className="form-control-lg"
      name="title"
      placeholder="Article Title"
      store={model.$form}
      onChange={model.handleFieldChanged}
    />

    <InputField
      name="description"
      placeholder="What's this article about?"
      store={model.$form}
      onChange={model.handleFieldChanged}
    />

    <TextField
      name="body"
      placeholder="Write your article (in markdown)"
      rows={8}
      store={model.$form}
      onChange={model.handleFieldChanged}
    />
  </UIForm>
);
