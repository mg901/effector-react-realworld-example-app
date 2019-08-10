import React from 'react';
import { ListErrors } from '../components/list-errors';
import { Button } from '../components/button';
import { Form } from './form';
import { logOut } from '../auth/model';

export const Settings = () => {
  return (
    <div className="settings-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Your Settings</h1>
            <ListErrors />
            <Form />
            <hr />

            <Button className="btn-outline-danger" onClick={() => logOut()}>
              Or click here to logout.
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
