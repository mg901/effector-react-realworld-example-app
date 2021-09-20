import { createEffect, sample } from 'effector';
import { createGate } from 'effector-react';
import * as article from 'entities/article';
import * as api from 'shared/api';

import { limit } from 'shared/library/limit';

export type fetchFeedFxArgs = Readonly<{
  pageSize: number;
  pageIndex: number;
}>;

export const fetchFeedFx = createEffect<
  fetchFeedFxArgs,
  article.types.FeedType
>(({ pageSize, pageIndex }) =>
  api.get(`articles?${limit(pageSize, pageIndex)}`).then((x) => x.data),
);

export const Gate = createGate();

export const {
  paginationChanged,
  favoriteArticleToggled,
  $pageSize,
  $pageIndex,
  $articles,
  selectors,
} = article.model.createFeed({
  effect: fetchFeedFx,
});

sample({
  source: {
    pageSize: $pageSize,
    pageIndex: $pageIndex,
  },
  clock: [Gate.open, paginationChanged],
  target: fetchFeedFx,
});
