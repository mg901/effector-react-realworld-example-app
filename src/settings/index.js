import React from 'react';
import { ListErrors } from '../components/list-errors';
import { Button } from '../components/button';
import { Form } from './form';
import { logOut } from '../auth/model.events';

export const Settings = () => {
  return (
    <div className="container">
      <h1 className="h1">Your Settings</h1>
      <ListErrors />
      <Form />
      <hr />

      <Button className="btn-outline-danger" onClick={() => logOut()}>
        Or click here to logout.
      </Button>
    </div>
  );
};
