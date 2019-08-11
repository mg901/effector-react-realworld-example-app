import React from 'react';
import { Link } from 'react-router-dom';
import { useStore } from 'effector-react';
import { AuthPage } from './auth-page';
import { InputFiled } from '../components/input-field';
import { Button } from '../components/button';

import { $userProfile, signIn, onChangeText } from './model';

export const SignIn = () => {
  const { email, password } = useStore($userProfile);
  const isLoading = useStore(signIn.pending);

  return (
    <AuthPage title="Sign In">
      <p className="text-xs-center">
        <Link to="/register">Need an account?</Link>
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          signIn({ email, password });
        }}>
        <fieldset>
          <InputFiled
            type="email"
            placeholder="Email"
            value={email}
            onChange={onChangeText('email')}
          />

          <InputFiled
            type="password"
            placeholder="Password"
            value={password}
            onChange={onChangeText('password')}
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
