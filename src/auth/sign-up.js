import { Link } from 'react-router-dom';
import React from 'react';
import { useStore } from 'effector-react';

import { AuthPage } from './auth-page';
import { InputFiled } from '../components/input-field';
import { Button } from '../components/button';

import { $userProfile, signUp, onChangeText } from './model';

export const SignUp = () => {
  const { name, email, password } = useStore($userProfile);
  const isLoading = useStore(signUp.pending);

  return (
    <AuthPage title="Sign Up">
      <p className="text-xs-center">
        <Link to="/login">Have an account?</Link>
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          signUp({ name, email, password });
        }}>
        <fieldset>
          <InputFiled
            placeholder="Username"
            value={name}
            onChange={onChangeText('name')}
          />

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
            Sign up
          </Button>
        </fieldset>
      </form>
    </AuthPage>
  );
};
