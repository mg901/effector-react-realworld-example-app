import { createEffect, attach } from 'effector';
import { createGate } from 'effector-react';
import { get } from '../../../api';
import { limit } from '../../../library';
import * as feed from '../../../library/feed';

export const PageGate = createGate();
export const {
  $currentPage,
  currentPageSetted,
  $articles,
  $totalPages,
  $feed: $globalFeed,
} = feed.createFeedModel();

const getFeedFx = createEffect((page: number) =>
  get<feed.types.Feed>(`/articles?${limit(10, page - 1)}`),
);

export const getGlobalFeedFx = attach({
  source: $currentPage,
  effect: getFeedFx,
});
