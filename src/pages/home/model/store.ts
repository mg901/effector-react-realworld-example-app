import { createEffect, createEvent, forward, restore } from 'effector';
import { useStore, createGate } from 'effector-react';
import { createQueryStore } from '@/shared/router';
import * as api from './api';

export const tagSelected = createEvent<string>();
export const getTagsFx = createEffect(api.getTags);

export const Gate = createGate();
export const $tags = restore(getTagsFx.doneData, []);
export const $tagQuery = createQueryStore('tag');

forward({
  from: Gate.open,
  to: getTagsFx,
});

export const selectors = {
  useTagQuery: () => useStore($tagQuery),
  useLoadTags: () => useStore(getTagsFx.pending),
};
