import { createEffect, createEvent, restore, forward } from 'effector';
import { createGate } from 'effector-react';
import { persist } from 'effector-storage/query';
import * as article from 'entities/article';
import * as api from 'shared/api';

export const Gate = createGate();

export const tagSelected = createEvent<string>();
export const fetchTagsFx = createEffect(() => {
  return api
    .get('tags')
    .then<article.types.Article['tagList']>((x) => x.data.tags);
});

export const $tags = restore(fetchTagsFx.doneData, []);
export const $currentTag = restore(tagSelected, '');

persist({
  store: $currentTag,
  key: 'tag',
});

forward({
  from: Gate.open,
  to: fetchTagsFx,
});
