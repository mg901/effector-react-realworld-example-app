import { createEffect, forward, attach } from 'effector-root';
import * as feed from 'shared/feed';
import { api } from 'api';
import { limit } from 'library/limit';
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
  ({ pageSize, page }) =>
    api.get(`articles?${limit(pageSize, page)}`).then(({ data }) => data),
);

$feed.on(fetchFeedFx.doneData, (_, payload) => payload);

forward({
  from: [Gate.open, currentPageWasSet],
  to: attach({
    source: {
      pageSize: $pageSize,
      page: $currentPage,
    },
    effect: fetchFeedFx,
  }),
});
