import { createEffect, createStore } from 'effector';
import { createGate } from 'effector-react';
import * as api from 'api';
import * as feed from 'features/feed';
import { limit } from 'library/limit';
import * as types from './types';

export const PageGate = createGate();
export const {
  currentPageSettled,
  favoriteToggled,
  $currentPage,
  $articles,
  $totalPages,
  $feed,
  $pageSize,
} = feed.createFeedModel();

export const fetchFeedFx = createEffect(
  ({ pageSize, page }: types.fetchFeedFxArgs) =>
    api.get<feed.types.Feed>(`/articles?${limit(pageSize, page)}`),
);

export const $isFirstBoot = createStore<boolean>(true);
