import { createEffect, createEvent, restore } from 'effector';
import { persist } from 'effector-storage/query';
import * as article from 'entities/article';
import * as api from 'shared/api';

export const tagSelected = createEvent<string>();
export const getTagsFx = createEffect(() => {
  return api
    .get('tags')
    .then<article.types.Article['tagList']>((x) => x.data.tags);
});

export const $tags = restore(getTagsFx.doneData, []);
export const $currentTag = restore(tagSelected, '');

persist({
  store: $currentTag,
  key: 'tag',
});
