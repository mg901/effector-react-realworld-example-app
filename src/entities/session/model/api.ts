import * as http from '@/shared/http';
import * as types from './types';

export const signIn = ({ email, password }: types.SignInArgs) =>
  http.request<types.VisitorResponse>({
    url: 'users/login',
    method: 'post',
    data: {
      user: { email, password },
    },
  });

export const signUp = ({ username, email, password }: types.SignUpArgs) =>
  http.request<types.VisitorResponse>({
    url: 'users',
    method: 'post',
    data: {
      user: { username, email, password },
    },
  });

export const getVisitor = () =>
  http.request<types.VisitorResponse>({
    url: 'user',
    method: 'get',
  });

export const changeVisitor = (fields: any) => {
  return http.request<types.VisitorResponse>({
    url: 'user',
    method: 'put',
    data: {
      user: !fields.password ? { ...fields, password: undefined } : fields,
    },
  });
};
