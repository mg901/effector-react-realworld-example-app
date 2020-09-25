import React from 'react';
import { CommentsList } from './comment-list';
import { Form } from './form';
import '../model/init';

export const Comments: React.FC = () => (
  <div className="col-xs-12 col-md-8 offset-md-2">
    <Form />
    <CommentsList />
  </div>
);
