import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Form, Input, Button } from '../../../ui';
import { Paths } from '../../../router';
import { formSubmitted } from '../model';
import '../init';

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <h1 className="h1">Sign In</h1>

      <p>
        <Link to={Paths.REGISTRATION}>Need an account?</Link>
      </p>

      <Form
        onSubmit={(e) => {
          e.preventDefault();
          formSubmitted({ email, password });
        }}>
        <Input
          type="email"
          label="Email"
          name="email"
          onChange={(e) => setEmail(e.currentTarget.value)}
        />

        <Input
          label="Password"
          type="password"
          name="password"
          autoComplete="current-password"
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
        <Button type="submit">Sign In</Button>
      </Form>
    </Container>
  );
};
