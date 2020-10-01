import { createEffect } from 'effector';
import * as api from 'api';
import * as feed from 'features/feed';
import { limit } from 'library/limit';
import * as types from './types';

export const {
  PageGate,
  currentPageWasSet,
  favoriteToggled,
  $currentPage,
  $articles,
  $totalPages,
  $feed,
  $pageSize,
  useModel,
} = feed.createFeedModel();

export const fetchFeedFx = createEffect(
  ({ pageSize, page }: types.fetchFeedFxArgs) =>
    api.get<feed.types.Feed>(`/articles?${limit(pageSize, page)}`),
);
