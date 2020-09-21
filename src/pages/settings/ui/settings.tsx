import React from 'react';
import { Container, Form, Button } from 'ui';
import { model } from '../model';
import { InputField } from './input-field';
import { TextField } from './text-field';
import '../model/init';

export const SettingsPage: React.FC = () => (
  <Container>
    <h1>Your Settings</h1>
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        model.formSubmitted();
      }}>
      <InputField
        label="Image"
        name="image"
        onChange={model.handleFieldChanged}
      />
      <InputField
        label="Username"
        name="username"
        onChange={model.handleFieldChanged}
      />
      <TextField label="Bio" name="bio" onChange={model.handleFieldChanged} />

      <InputField
        label="Email"
        name="email"
        onChange={model.handleFieldChanged}
      />
      <InputField
        label="New Password"
        name="password"
        onChange={model.handleFieldChanged}
      />

      <Button type="submit">Update Settigs</Button>
    </Form>
  </Container>
);
