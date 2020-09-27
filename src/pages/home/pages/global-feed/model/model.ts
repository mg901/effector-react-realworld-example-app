import { createEffect } from 'effector';
import { createGate } from 'effector-react';
import * as api from 'api';
import * as feed from 'features/feed';
import { limit } from 'library/limit';

export const PageGate = createGate();
export const {
  currentPageSettled,
  favoriteToggled,
  $currentPage,
  $articles,
  $isEmptyArticles,
  $totalPages,
  $feed,
} = feed.createFeedModel();

export const getFeedFx = createEffect((page: number) =>
  api.get<feed.types.Feed>(`/articles?${limit(10, page)}`),
);
