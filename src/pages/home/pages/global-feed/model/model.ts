import { createEffect } from 'effector';
import { request } from 'api';
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
    request
      .get<feed.types.Feed>(`articles?${limit(pageSize, page)}`)
      .then((x) => x.data),
);
