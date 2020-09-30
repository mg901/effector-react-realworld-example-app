import { createEvent, createEffect, createStore, combine } from 'effector';
import { createGate } from 'effector-react';
import { status } from 'patronum/status';
import * as api from 'api';
import * as feed from 'features/feed';
import { limit } from 'library/limit';
import * as types from './types';

export const PageGate = createGate();
export const toggleFavorite = createEvent<feed.types.Article>();

export const fetchFeedFx = createEffect(
  ({ pageSize, page }: types.fetchFeedFxArgs) =>
    api.get<feed.types.Feed>(`/articles/feed?${limit(pageSize, page)}`),
);

export const {
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
export const $isFirstBoot = createStore<boolean>(true);
export const $isEmptyArticles = combine(
  $status,
  $articles,
  (is, articles) => is === 'done' && articles.length === 0,
);
