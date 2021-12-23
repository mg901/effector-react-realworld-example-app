import * as visitor from 'entities/visitor';
import * as api from 'shared/api';
import * as types from './types';

export const signUp = ({ username, email, password }: types.FormValues) => {
  return api
    .post<{ user: visitor.types.Visitor }>('users', {
      user: { username, email, password },
    })
    .then((response) => response.data);
};
