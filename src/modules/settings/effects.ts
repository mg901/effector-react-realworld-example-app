import { createEffect } from 'effector';
import { put } from '../../api';
import { APIError } from '../types';
import { UpdatedUser } from './types';

export const fxSubmitForm = createEffect<UpdatedUser, unknown, APIError>({
  handler: (user) => put('/user', { user }),
});
