import * as visitor from 'entities/visitor';
import * as api from 'shared/api';
import * as types from './types';

export const signIn = async ({ email, password }: types.SignInPayload) => {
  const { data } = await api.post<{ user: visitor.types.Visitor }>(
    'users/login',
    {
      user: { email, password },
    },
  );

  return data.user;
};
