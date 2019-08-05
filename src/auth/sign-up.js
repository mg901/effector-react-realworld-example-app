import { Link } from 'react-router-dom';
import React from 'react';
import { useStore } from 'effector-react';

import { AuthPage } from './auth-page';
import { InputFiled } from '../components/input-field';
import { SubmitBtn } from '../components/submit-btn';

import {
  $name,
  $email,
  $password,
  asyncSignUp,
  onChangeName,
  onChangeEmail,
  onChangePassword,
} from './model';

export const SignUp = () => {
  const name = useStore($name);
  const email = useStore($email);
  const password = useStore($password);
  const isLoading = useStore(asyncSignUp.pending);

  return (
    <AuthPage title="Sign Up">
      <p className="text-xs-center">
        <Link to="/login">Have an account?</Link>
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          asyncSignUp({ name, email, password });
        }}>
        <fieldset>
          <InputFiled
            placeholder="Username"
            value={name}
            onChange={onChangeName}
          />

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

          <SubmitBtn disabled={isLoading}>Sign up</SubmitBtn>
        </fieldset>
      </form>
    </AuthPage>
  );
};
