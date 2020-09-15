import { createEffect, restore } from 'effector';
import { createGate } from 'effector-react';
import { get } from '../../api';
import { authTypes } from '../../core/auth';
import * as router from '../../core/router';
import * as types from './types';

export const RootGate = createGate();

export const $$currentTag = router.model.$location.map((x) =>
  new URLSearchParams(x.search).get('name'),
);

export const getUserFx = createEffect(() =>
  get<authTypes.AuthUserResponse>('/user'),
);

export const getTagsFx = createEffect(() => get<types.Tags>('/tags'));

export const initAuthAppFx = createEffect(() =>
  Promise.all([getUserFx(), getTagsFx()]),
);

export const $tags = restore(
  getTagsFx.doneData.map((x) => x.tags),
  [],
);
