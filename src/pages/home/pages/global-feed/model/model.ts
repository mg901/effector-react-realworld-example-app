import { createEffect, createStore } from 'effector';
import { createGate } from 'effector-react';
import * as api from 'api';
import * as feed from 'features/feed';
import { limit } from 'library/limit';
import * as types from './types';

export { changeUrlFx } from 'features/feed';

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

export const getFeedFx = createEffect(
  ({ pageSize, page }: types.getFeedFxArgs) =>
    api.get<feed.types.Feed>(`/articles?${limit(pageSize, page)}`),
);

export const $isFirstBoot = createStore<boolean>(true);
