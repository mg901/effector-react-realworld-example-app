import { createEffect, restore, forward } from 'effector-root';
import { createGate } from 'effector-react';
import { api } from 'shared/api';

export const Gate = createGate();

export const fetchTagsFx = createEffect<void, readonly string[]>(() => {
  return api.get('tags').then(({ data }) => data.tags);
});

export const $tags = restore(fetchTagsFx.doneData, []);

forward({
  from: Gate.open,
  to: fetchTagsFx,
});
