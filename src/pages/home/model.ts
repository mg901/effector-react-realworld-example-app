import { createDomain, restore, forward } from 'effector';
import { createGate } from 'effector-react';
import * as api from 'shared/api';

export const Gate = createGate();

const domain = createDomain('home-page');
export const fetchTagsFx = domain.createEffect<void, readonly string[]>(() => {
  return api.get('tags').then(({ data }) => data.tags);
});

export const $tags = restore(fetchTagsFx.doneData, []);

forward({
  from: Gate.open,
  to: fetchTagsFx,
});
