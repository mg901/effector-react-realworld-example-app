import { createGate } from 'effector-react';
import { request } from '../../../api';
import { model, types } from '../../../modules/app';

export const Gate = createGate();

export const fetchUserFx = model.domain.createEffect(() =>
  request.get<{ user: types.User }>('user').then((x) => x.data.user),
);
