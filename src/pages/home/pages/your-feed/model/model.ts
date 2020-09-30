import { createEvent, createEffect, combine } from 'effector';
import { status } from 'patronum/status';
import * as api from 'api';
import * as feed from 'features/feed';
import { limit } from 'library/limit';
import * as types from './types';

export const toggleFavorite = createEvent<feed.types.Article>();

export const fetchFeedFx = createEffect(
  ({ pageSize, page }: types.fetchFeedFxArgs) =>
    api.get<feed.types.Feed>(`/articles/feed?${limit(pageSize, page)}`),
);

export const {
  PageGate,
  currentPageWasSet,
  favoriteToggled,
  setFavoriteArticleFx,
  setUnfavoriteArticleFx,
  $currentPage,
  $feed,
  $articles,
  $totalPages,
  $pageSize,
} = feed.createFeedModel();

export const $status = status({ effect: fetchFeedFx });
export const $isEmptyArticles = combine(
  $status,
  $articles,
  (is, articles) => is === 'done' && articles.length === 0,
);
