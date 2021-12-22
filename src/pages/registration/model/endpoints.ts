import * as visitor from 'entities/visitor';
import * as api from 'shared/api';
import * as types from './types';

type SingUpResponse = { user: visitor.types.Visitor };

export const signUp = async ({
  username,
  email,
  password,
}: types.FormValues) => {
  const { data } = await api.post<SingUpResponse>('users', {
    user: { username, email, password },
  });

  return data.user;
};
