import React from 'react';
import { Link } from 'react-router-dom';
import { useStore } from 'effector-react';

import { AuthPage } from './auth-page';
import { InputFiled } from '../components/input-field';
import { Button } from '../components/button';

import {
  $email,
  $password,
  asyncSignIn,
  onChangeEmail,
  onChangePassword,
} from './model';

export const SignIn = () => {
  const email = useStore($email);
  const password = useStore($password);
  const isLoading = useStore(asyncSignIn.pending);

  return (
    <AuthPage title="Sign In">
      <p className="text-xs-center">
        <Link to="/register">Need an account?</Link>
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          asyncSignIn({ email, password });
        }}>
        <fieldset>
          <InputFiled
            type="email"
            placeholder="Email"
            value={email}
            onChange={onChangeEmail}
          />

          <InputFiled
            type="password"
            placeholder="Password"
            value={password}
            onChange={onChangePassword}
          />

          <Button
            type="submit"
            className="btn-lg btn-primary pull-xs-right"
            disabled={isLoading}>
            Sign in
          </Button>
        </fieldset>
      </form>
    </AuthPage>
  );
};
