import React from 'react';

import { Form as UIForm } from 'ui';
import { model } from '../model';
import { AddComment } from './add-comment';
import { FormFooter } from './form-footer';

export const Form: React.FC = () => (
  <UIForm className="card comment-form" onSubmit={model.formSubmitted}>
    <div className="card-block">
      <AddComment />
    </div>
    <FormFooter />
  </UIForm>
);
