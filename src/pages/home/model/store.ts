import { createEffect, createEvent, sample, createStore } from 'effector';
import { useStore } from 'effector-react';
import * as api from './api';

export const mount = createEvent();
export const tagSelected = createEvent<string>();
export const getTagsFx = createEffect(api.getTags);

export const $tags = createStore<string[]>([]).on(
  getTagsFx.doneData,
  (_, payload) => payload,
);

sample({
  clock: mount,
  target: getTagsFx,
});

export const selectors = {
  useLoadTags: () => useStore(getTagsFx.pending),
};
