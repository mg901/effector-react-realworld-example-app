import { Link } from 'react-router-dom';
import React from 'react';
import { PageTemplate } from './page-template';
import { InputField, Form } from '../../../ui';
// import { Submit } from '../submit';
import { signUp, handleTextChanged } from '../events';

export const SignUp: React.FC = () => (
  <PageTemplate title="Sign Up">
    <p>
      <Link to="/login">Have an account?</Link>
    </p>

    <Form onSubmit={signUp}>
      <fieldset>
        <InputField
          name="username"
          placeholder="Username"
          onChange={handleTextChanged}
        />

        <InputField
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleTextChanged}
        />

        <InputField
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
