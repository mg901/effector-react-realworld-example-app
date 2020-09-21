import { createEffect, attach } from 'effector';
import { createGate } from 'effector-react';
import * as api from 'api';
import * as feed from 'features/feed';
import { limit } from 'library/limit';

export const PageGate = createGate();
export const {
  currentPageSetted,
  favoriteToggled,
  $currentPage,
  $articles,
  $isEmptyArticles,
  $totalPages,
  $feed: $globalFeed,
} = feed.createFeedModel();

const getFeedFx = createEffect((page: number) =>
  api.get<feed.types.Feed>(`/articles?${limit(10, page)}`),
);

export const getGlobalFeedFx = attach({
  source: $currentPage,
  effect: getFeedFx,
});
