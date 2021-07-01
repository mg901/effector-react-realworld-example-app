import { createEffect, sample } from 'effector-root';
import { status } from 'patronum/status';
import * as feed from 'shared/feed';
import { api } from 'shared/api';
import { limit } from 'shared/library/limit';
import * as model from '../../model';
import * as types from '../../model/types';

export const fetchFeedFx = createEffect<types.FetchFeedFxArgs, feed.types.Feed>(
  ({ username, page, pageSize }) => {
    return api
      .get(
        `articles?author=${encodeURIComponent(username)}&${limit(
          pageSize,
          page,
        )}`,
      )
      .then(({ data }) => data);
  },
);

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
} = feed.createFeedModel({
  pageSize: 5,
  status: status({ effect: fetchFeedFx }),
});

$feed.on(fetchFeedFx.doneData, (_, payload) => payload);

sample({
  source: {
    username: model.$username,
    page: $currentPage,
    pageSize: $pageSize,
  },
  clock: [Gate.open, currentPageWasSet],
  target: fetchFeedFx,
});
