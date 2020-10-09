import { createGate } from 'effector-react';
import { request } from '../../../api';
import { types } from '../../../modules/user';
import { root } from '../../../root';

export const Gate = createGate();

export const fetchUserFx = root.createEffect(() =>
  request.get<{ user: types.User }>('user').then((x) => x.data.user),
);
