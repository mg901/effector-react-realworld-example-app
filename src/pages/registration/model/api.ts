import * as visitor from '@/entities/visitor';
import * as http from '@/shared/http';
import * as types from './types';

export const signUp = ({ username, email, password }: types.FormValues) => {
  return http
    .request<{ user: visitor.types.Visitor }>({
      url: 'users',
      method: 'post',
      data: {
        user: { username, email, password },
      },
    })
    .then((response) => response.user);
};
