import { createEffect, attach } from 'effector';
import { createGate } from 'effector-react';
import { get } from '../../../../api';
import { limit } from '../../../../library';
import * as feed from '../../../../library/feed';

export const PageGate = createGate();
export const {
  currentPageSetted,
  $currentPage,
  $currentTag,
  $feed: $yourFeed,
  $articles,
  $totalPages,
} = feed.createFeedModel();

const getFeedFx = createEffect((page: number) =>
  get<feed.types.Feed>(`/articles/feed?${limit(10, page - 1)}`),
);

export const getYourFeedFx = attach({
  source: $currentPage,
  effect: getFeedFx,
});
