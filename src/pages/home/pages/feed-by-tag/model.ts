import { createEffect, sample } from 'effector';
import { createGate } from 'effector-react';
import * as article from 'entities/article';
import * as api from 'shared/api';
import { limit } from 'shared/library/limit';
import * as home from '../../model';

export type FetchFeedByTagArgs = Readonly<{
  tag: string;
  pageIndex: number;
  pageSize: number;
}>;

export const getFeedFx = createEffect<
  FetchFeedByTagArgs,
  article.types.FeedType
>(({ tag, pageSize, pageIndex }) =>
  api
    .get(
      `articles?tag=${encodeURIComponent(tag)}&${limit(pageSize, pageIndex)}`,
    )
    .then((x) => x.data),
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
  effect: getFeedFx,
});

sample({
  source: {
    tag: home.model.$currentTag,
    pageSize: $pageSize,
    pageIndex: $pageIndex,
  },
  clock: [Gate.open, paginationChanged, home.model.tagSelected],
  target: getFeedFx,
});
