import { createEffect, restore } from 'effector';
import { createGate } from 'effector-react';
import { get } from '../../api';
import * as auth from '../../auth';
import * as router from '../../library/router';
import * as types from './types';

export const RootGate = createGate();

export const $$currentTag = router.model.$location.map((x) =>
  new URLSearchParams(x.search).get('name'),
);

export const getUserFx = createEffect(() =>
  get<auth.types.AuthUserResponse>('/user'),
);

export const getTagsFx = createEffect(() => get<types.Tags>('/tags'));

export const initAuthAppFx = createEffect(() =>
  Promise.all([getUserFx(), getTagsFx()]),
);

export const $tags = restore(
  getTagsFx.doneData.map((x) => x.tags),
  [],
);
