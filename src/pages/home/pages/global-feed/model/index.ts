import { createEffect, sample } from 'effector-root';
import { api } from 'shared/api';
import * as feed from 'shared/feed';
import { limit } from 'shared/library/limit';
import * as types from './types';

export const {
  Gate,
  currentPageWasSet,
  favoriteToggled,
  $currentPage,
  $articles,
  $totalPages,
  $feed,
  $pageSize,
  useModel,
} = feed.createFeedModel();

export const fetchFeedFx = createEffect<types.fetchFeedFxArgs, feed.types.Feed>(
  ({ pageSize, page }) => {
    return api
      .get(`articles?${limit(pageSize, page)}`)
      .then(({ data }) => data);
  },
);

$feed.on(fetchFeedFx.doneData, (_, payload) => payload);

sample({
  source: {
    pageSize: $pageSize,
    page: $currentPage,
  },
  clock: [Gate.open, currentPageWasSet],
  target: fetchFeedFx,
});
