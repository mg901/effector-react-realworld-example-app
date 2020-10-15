import { createEffect, createStore, forward } from 'effector-root';
import { createGate } from 'effector-react';
import { request } from 'api';
import * as types from './types';

export const Gate = createGate();

export const fetchTagsFx = createEffect(() =>
  request
    .get<types.getTagsFxDone>('tags')
    .then((response) => response.data.tags),
);

export const $tags = createStore<types.TagList>([]).on(
  fetchTagsFx.doneData,
  (_, payload) => payload,
);

forward({
  from: Gate.open,
  to: fetchTagsFx,
});
