import { Link } from 'react-router-dom';
import React from 'react';
import { PageTemplate, signUp, handleTextChanged } from '../modules';
import { FormControl, Form } from '../ui';
// import { Submit } from '../submit';

export const SignUp: React.FC = () => (
  <PageTemplate title="Sign Up">
    <p>
      <Link to="/login">Have an account?</Link>
    </p>

    <Form onSubmit={signUp}>
      <fieldset>
        <FormControl
          labelText="Username"
          name="username"
          placeholder="Username"
          onChange={handleTextChanged}
        />

        <FormControl
          labelText="Email"
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleTextChanged}
        />

        <FormControl
          labelText="Password"
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleTextChanged}
        />

        <button type="submit">Sign Up</button>

        {/* <Submit value="Sign Up" /> */}
      </fieldset>
    </Form>
  </PageTemplate>
);
