import * as visitor from 'entities/visitor';
import * as http from 'shared/http';
import * as types from './types';

export const signUp = ({ username, email, password }: types.FormValues) => {
  return http
    .post<{ user: visitor.types.Visitor }>('users', {
      user: { username, email, password },
    })
    .then((response) => response.data.user);
};
