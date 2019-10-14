import React from 'react';
import { combine } from 'effector';
import { useStore } from 'effector-react';
import { Button } from '../components';
import { signIn, signUp } from '../auth';

export const isLoading = combine(
  signIn.pending,
  signUp.pending,
  (login, registration) => login || registration,
);

export const Submit = ({ value }) => (
  <Button type="submit" disabled={useStore(isLoading)}>
    {value}
  </Button>
);
