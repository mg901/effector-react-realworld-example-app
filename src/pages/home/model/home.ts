import { createEffect, createEvent, forward, restore } from 'effector';
import { createGate } from 'effector-react';

import { persist } from 'effector-storage/query';
import * as article from 'entities/article';
import * as api from 'shared/api';

export const tagSelected = createEvent<string>();
export const getTagsFx = createEffect(() => {
  return api
    .get<{ tags: article.types.Article['tagList'] }>('tags')
    .then((x) => x.data.tags);
});

export const Gate = createGate();
export const $tags = restore(getTagsFx.doneData, []);

export const $currentTag = restore(tagSelected, '');

persist({
  store: $currentTag,
  key: 'tag',
});

forward({
  from: Gate.open,
  to: getTagsFx,
});
