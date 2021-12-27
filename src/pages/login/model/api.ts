import * as visitor from 'entities/visitor';
import * as http from 'shared/http';
import * as types from './types';

export const signIn = ({ email, password }: types.SignInPayload) => {
  return http
    .post<{ user: visitor.types.Visitor }>('users/login', {
      user: { email, password },
    })
    .then((response) => response.data.user);
};
