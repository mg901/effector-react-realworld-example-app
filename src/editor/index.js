import React from 'react';
import { ListErrors } from '../components/list-errors';
import { Form } from './form';

export const Editor = () => (
  <div className="editor-page">
    <div className="container page">
      <div className="row">
        <div className="col-md-10 offset-md-1 col-xs-12">
          <ListErrors />
          <Form />
        </div>
      </div>
    </div>
  </div>
);
