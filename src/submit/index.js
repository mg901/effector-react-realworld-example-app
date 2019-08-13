import React from 'react';
import { combine } from 'effector';
import { useStore } from 'effector-react';
import { Button } from '../components/button';
import { asyncSignIn, asyncSignUp } from '../auth/model.events';

export const isLoading = combine(
  asyncSignIn.pending,
  asyncSignUp.pending,
  (login, registration) => login || registration,
);

export const Submit = ({ value }) => (
  <Button type="submit" disabled={useStore(isLoading)}>
    {value}
  </Button>
);
