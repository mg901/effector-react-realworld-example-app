import React, { useEffect } from 'react';
import { ListErrors } from '../list-errors';
import { Form } from './form';
import { leavePage } from './model';

export const Editor = () => {
  useEffect(() => {
    return () => leavePage();
  });

  return (
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
};
