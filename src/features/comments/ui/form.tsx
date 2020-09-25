import React from 'react';
import { Form as UIForm, Button } from 'ui';
import { model } from '../model';
import { AddComment } from './add-comment';

export const Form: React.FC = () => (
  <UIForm className="card comment-form" onSubmit={model.formSubmitted}>
    <div className="card-block">
      <AddComment />
    </div>
    <div className="card-footer">
      <img src="" className="comment-author-img" alt="" />
      <Button type="submit" className="btn-sm btn-primary">
        Post Comment
      </Button>
    </div>
  </UIForm>
);
