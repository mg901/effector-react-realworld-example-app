import { createEffect, restore, forward } from 'effector-root';
import { createGate } from 'effector-react';
import { api } from 'shared/api';
import { TagsList } from './types';

export const Gate = createGate();

export const fetchTagsFx = createEffect<void, TagsList>(() => {
  return api.get('tags').then(({ data }) => data.tags);
});

export const $tags = restore(fetchTagsFx.doneData, []);

forward({
  from: Gate.open,
  to: fetchTagsFx,
});
