import { createEffect, createEvent, forward, restore } from 'effector';
import { useStore, createGate } from 'effector-react';
import * as api from './api';

export const tagSelected = createEvent<string>();
export const getTagsFx = createEffect(api.getTags);

export const Gate = createGate();
export const $tags = restore(getTagsFx.doneData, []);

forward({
  from: Gate.open,
  to: getTagsFx,
});

export const selectors = {
  useLoadTags: () => useStore(getTagsFx.pending),
};
