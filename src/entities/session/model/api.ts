import { api } from '@/shared/api';
import * as types from './types';

export const signIn = ({ email, password }: types.SignInArgs) =>
  api.request<types.VisitorResponse>({
    url: '/users/login',
    method: 'POST',
    body: {
      user: { email, password },
    },
  });

export const signUp = ({ username, email, password }: types.SignUpArgs) =>
  api.request<types.VisitorResponse>({
    url: '/users',
    method: 'POST',
    body: {
      user: { username, email, password },
    },
  });

export const getVisitor = () =>
  api.request<types.VisitorResponse>({
    url: '/user',
    method: 'GET',
  });

export const changeVisitor = (fields: any) => {
  return api.request<types.VisitorResponse>({
    url: '/user',
    method: 'PUT',
    body: {
      user: !fields.password ? { ...fields, password: undefined } : fields,
    },
  });
};
