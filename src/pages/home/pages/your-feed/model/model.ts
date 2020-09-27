import { createEvent, createEffect, combine } from 'effector';
import { createGate } from 'effector-react';
import { status } from 'patronum/status';
import * as api from 'api';
import * as feed from 'features/feed';
import { limit } from 'library/limit';

export const PageGate = createGate();

export const toggleFavorite = createEvent<feed.types.Article>();

export const getFeedFx = createEffect((page: number) =>
  api.get<feed.types.Feed>(`/articles/feed?${limit(10, page)}`),
);

export const {
  currentPageSettled,
  favoriteToggled,
  setFavoriteArticleFx,
  setUnfavoriteArticleFx,
  $currentPage,
  $feed,
  $articles,
  $totalPages,
} = feed.createFeedModel();

export const $status = status({ effect: getFeedFx });
export const $isEmptyArticles = combine(
  $status,
  $articles,
  (is, articles) => is === 'done' && articles.length === 0,
);
