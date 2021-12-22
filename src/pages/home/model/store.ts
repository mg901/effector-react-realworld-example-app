import { createEffect, createEvent, forward, restore } from 'effector';
import { useStore, createGate } from 'effector-react';
import * as article from 'entities/article';
import * as api from 'shared/api';

export const tagSelected = createEvent<string>();
export const getTagsFx = createEffect(() => {
  return api
    .get<{ tags: article.types.Article['tagList'] }>('tags')
    .then((response) => response.data.tags);
});

export const Gate = createGate();
export const $tags = restore(getTagsFx.doneData, []);

forward({
  from: Gate.open,
  to: getTagsFx,
});

export const selectors = {
  useLoadTags: () => useStore(getTagsFx.pending),
};
