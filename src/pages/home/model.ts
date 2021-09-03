import { createDomain, restore, forward } from 'effector';
import { createGate } from 'effector-react';
import * as article from 'entities/article';
import * as api from 'shared/api';

export const Gate = createGate();

const domain = createDomain('home-page');

export const fetchTagsFx = domain.createEffect(() => {
  return api
    .get('tags')
    .then<article.types.Article['tagList']>((x) => x.data.tags);
});

export const $tags = restore(fetchTagsFx.doneData, []);

forward({
  from: Gate.open,
  to: fetchTagsFx,
});
