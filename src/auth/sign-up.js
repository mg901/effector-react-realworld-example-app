import { Link } from 'react-router-dom';
import React from 'react';
import { AuthPage } from './auth-page';
import { InputField } from '../components';
import { Submit } from '../submit';
import { onSignUp, onChangeText } from './model.events';

export const SignUp = () => (
  <AuthPage title="Sign Up">
    <p>
      <Link to="/login">Have an account?</Link>
    </p>

    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSignUp();
      }}>
      <fieldset>
        <InputField
          name="username"
          placeholder="Username"
          onChange={onChangeText}
        />

        <InputField
          type="email"
          name="email"
          placeholder="Email"
          onChange={onChangeText}
        />

        <InputField
          type="password"
          name="password"
          placeholder="Password"
          onChange={onChangeText}
        />

        <Submit value="Sign Up" />
      </fieldset>
    </form>
  </AuthPage>
);
