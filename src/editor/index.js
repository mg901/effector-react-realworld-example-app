import React from 'react';
import { ListErrors } from '../components';
import { Form } from './form';

export const Editor = () => (
  <div className="container">
    <h1 className="h1">New Post</h1>
    <ListErrors />
    <Form />
  </div>
);
