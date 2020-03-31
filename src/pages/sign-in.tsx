import React from 'react';
import { Link } from 'react-router-dom';
import { FormControl, Form } from '../ui';
// import { Submit } from '../submit';
import { PageTemplate, signIn, handleTextChanged } from '../modules';

export const SignIn: React.FC = () => (
  <PageTemplate title="Sign In">
    <p>
      <Link to="/register">Need an account?</Link>
    </p>

    <Form onSubmit={signIn}>
      <fieldset>
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
        <button type="submit">Sign In</button>

        {/* <Submit value="Sign In" /> */}
      </fieldset>
    </Form>
  </PageTemplate>
);
