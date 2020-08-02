import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Input, Button } from '../../../ui';
import { Paths } from '../../../router';
import { formSubmitted } from '../model';
import '../init';

export const Registration: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <h1 className="h1">Sign Up</h1>

      <p>
        <Link to={Paths.LOGIN}>Have an account?</Link>
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          formSubmitted({ username, email, password });
        }}>
        <Input
          name="username"
          label="Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <Input
          type="email"
          label="Email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          type="password"
          label="Password"
          name="password"
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </Container>
  );
};
