import React from 'react';
import {
  handleTextChanged,
  formSubmitted,
  loggedOut,
  FormField,
} from '../modules/settings';
import { Form, ErrorList, FormControl, Button } from '../ui';

export const Settings: React.FC = () => (
  <div className="container">
    <h1 className="h1">Your Settings</h1>
    <ErrorList />
    <Form>
      <FormField labelText="URL" name="image" />
      <FormField labelText="Username" name="username" />
      <FormField labelText="Bio" name="bio" as="textarea" rows={8} />
      <FormField labelText="Email" name="email" />
      <FormControl
        labelText="New Password"
        name="password"
        onChange={handleTextChanged}
      />
      <Button onClick={formSubmitted}>Update settings</Button>
    </Form>
    <Button onClick={loggedOut}>Or click here to logout</Button>
  </div>
);
