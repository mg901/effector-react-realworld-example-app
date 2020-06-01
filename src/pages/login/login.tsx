import React, { useState } from 'react';
import { useStore } from 'effector-react';
import { Link } from 'react-router-dom';
import { Container, ErrorList, Form, FormControl, Button } from '../../ui';
import { $responseFail } from '../../auth';
import { submitForm } from './model/events';
import './model/init';

export const Login: React.FC = () => {
  const errors = useStore($responseFail);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <ErrorList errors={errors} />
      <Container>
        <h1 className="h1">Sign In</h1>

        <p>
          <Link to="/registration">Need an account?</Link>
        </p>

        <Form
          onSubmit={() => {
            submitForm({ email, password });
          }}>
          <FormControl
            labelText="Email"
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.currentTarget.value)}
          />

          <FormControl
            labelText="Password"
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
          <Button type="submit">Sign In</Button>
        </Form>
      </Container>
    </Container>
  );
};
