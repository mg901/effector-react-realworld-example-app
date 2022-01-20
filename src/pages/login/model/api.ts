import * as visitor from '@/entities/visitor';
import * as http from '@/shared/http';
import * as types from './types';

export const signIn = ({ email, password }: types.FormValues) => {
  return http
    .request<{ user: visitor.types.Visitor }>({
      url: 'users/login',
      method: 'post',
      data: {
        user: { email, password },
      },
    })
    .then((response) => response.user);
};
