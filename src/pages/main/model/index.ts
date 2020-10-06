import { createEffect } from 'effector';
import { createGate } from 'effector-react';
import { request } from '../../../api';
import { User } from '../../../features/user/types';

export const Gate = createGate();

export const fetchUserFx = createEffect(() =>
  request.get<{ user: User }>('user').then((x) => x.data.user),
);
