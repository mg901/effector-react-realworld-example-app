import * as visitor from 'entities/visitor';
import * as api from 'shared/api';
import * as types from './types';

export const signIn = ({ email, password }: types.SignInPayload) => {
  return api
    .post<{ user: visitor.types.Visitor }>('users/login', {
      user: { email, password },
    })
    .then((response) => response.data.user);
};
