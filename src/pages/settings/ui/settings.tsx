import React from 'react';
import { Container, Form, Button } from '../../../ui';
import { InputField } from './input-field';
import { TextField } from './text-field';
import { handleFieldChanged, formSubmitted } from '../model';
import '../init';

export const Settings: React.FC = () => (
  <Container>
    <h1>Your Settings</h1>
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        formSubmitted();
      }}>
      <InputField label="Image" name="image" onChange={handleFieldChanged} />
      <InputField
        label="Username"
        name="username"
        onChange={handleFieldChanged}
      />
      <TextField label="Bio" name="bio" onChange={handleFieldChanged} />

      <InputField label="Email" name="email" onChange={handleFieldChanged} />
      <InputField
        label="New Password"
        name="password"
        onChange={handleFieldChanged}
      />

      <Button type="submit">Update Settigs</Button>
    </Form>
  </Container>
);
