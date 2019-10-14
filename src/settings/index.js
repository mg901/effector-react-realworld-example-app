import React from 'react';
import { ListErrors, Button } from '../components';
import { Form } from './form';
import { onLogOut } from '../auth';

export const Settings = () => {
  return (
    <div className="container">
      <h1 className="h1">Your Settings</h1>
      <ListErrors />
      <Form />
      <hr />

      <Button className="btn-outline-danger" onClick={() => onLogOut()}>
        Or click here to logout.
      </Button>
    </div>
  );
};
