import { createEvent, createEffect, createStore, combine } from 'effector';
import { createGate } from 'effector-react';
import { status } from 'patronum/status';
import * as api from 'api';
import * as feed from 'features/feed';
import { limit } from 'library/limit';
import * as types from './types';

export { changeUrlFx } from 'features/feed';

export const PageGate = createGate();
export const toggleFavorite = createEvent<feed.types.Article>();

export const getFeedFx = createEffect(
  ({ pageSize, page }: types.getFeedFxArgs) =>
    api.get<feed.types.Feed>(`/articles/feed?${limit(pageSize, page)}`),
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
  $pageSize,
} = feed.createFeedModel();

export const $status = status({ effect: getFeedFx });
export const $isFirstBoot = createStore<boolean>(true);
export const $isEmptyArticles = combine(
  $status,
  $articles,
  (is, articles) => is === 'done' && articles.length === 0,
);
