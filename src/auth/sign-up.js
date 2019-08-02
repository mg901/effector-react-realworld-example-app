import { Link } from 'react-router-dom';
import React from 'react';
import { useStore } from 'effector-react';

import { AuthPage } from './auth-page';
import { InputFiled } from '../components/input-field';
import { SubmitBtn } from '../components/submit-btn';

import {
  $username,
  $email,
  $password,
  asyncSignUp,
  changeUserName,
  changeEmail,
  changePassword,
} from './store';

const handleSubmit = (username, email, password) => (e) => {
  e.preventDefault();
  asyncSignUp(username, email, password);
};

const handleUserNameChange = (e) => changeUserName(e.currentTarget.value);
const handleChangeEmail = (e) => changeEmail(e.currentTarget.value);
const handleChangePassword = (e) => changePassword(e.currentTarget.value);

export const SignUp = () => {
  const username = useStore($username);
  const email = useStore($email);
  const password = useStore($password);
  const isLoading = useStore(asyncSignUp.pending);

  return (
    <AuthPage title="Sign In">
      <p className="text-xs-center">
        <Link to="/register">Need an account?</Link>
      </p>

      <form onSubmit={handleSubmit({ username, email, password })}>
        <fieldset>
          <InputFiled
            placeholder="Username"
            value={username}
            onChange={handleUserNameChange}
          />

          <InputFiled
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleChangeEmail}
          />

          <InputFiled
            type="password"
            placeholder="Password"
            value={password}
            onChange={handleChangePassword}
          />

          <SubmitBtn disabled={isLoading}>Sign in</SubmitBtn>
        </fieldset>
      </form>
    </AuthPage>
  );
};
