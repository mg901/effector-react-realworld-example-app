import { createEffect, sample } from 'effector-root';
import { status } from 'patronum/status';
import { api } from 'shared/api';
import * as feed from 'shared/feed';
import { limit } from 'library/limit';
import * as types from './types';

export const fetchFeedFx = createEffect<types.fetchFeedFxArgs, feed.types.Feed>(
  ({ pageSize, page }) => {
    return api
      .get(`articles/feed?${limit(pageSize, page)}`)
      .then(({ data }) => data);
  },
);

export const {
  Gate,
  currentPageWasSet,
  favoriteToggled,
  $currentPage,
  $feed,
  $articles,
  $pageSize,
  useModel,
} = feed.createFeedModel({
  status: status({ effect: fetchFeedFx }),
});

$feed.on(fetchFeedFx.doneData, (_, payload) => payload);

sample({
  source: {
    pageSize: $pageSize,
    page: $currentPage,
  },
  clock: [Gate.open, currentPageWasSet],
  target: fetchFeedFx,
});
