import React from 'react';
import { Link } from 'react-router-dom';
import { AuthPage } from './auth-page';
import { InputField } from '../components';
import { Submit } from '../submit';
import { signIn, onChangeText } from './model.events';

export const SignIn = () => (
  <AuthPage title="Sign In">
    <p>
      <Link to="/register">Need an account?</Link>
    </p>

    <form
      onSubmit={(e) => {
        e.preventDefault();
        signIn();
      }}>
      <fieldset>
        <InputField
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="email"
          onChange={onChangeText}
        />

        <InputField
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="current-password"
          onChange={onChangeText}
        />

        <Submit value="Sign In" />
      </fieldset>
    </form>
  </AuthPage>
);
