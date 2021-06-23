import { createEffect, sample } from 'effector-root';
import { status } from 'patronum/status';
import { api } from 'shared/api';
import * as feed from 'shared/feed';
import { limit } from 'shared/library/limit';
import * as model from '../../model/model';
import * as types from '../../model/types';

export const fetchFeedFx = createEffect<types.FetchFeedFxArgs, feed.types.Feed>(
  ({ username, page, pageSize }) => {
    return api
      .get(
        `articles?favorited=${encodeURIComponent(username)}&${limit(
          pageSize,
          page,
        )}`,
      )
      .then((response) => response.data);
  },
);

export const {
  Gate,
  currentPageWasSet,
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
    pageSize: $pageSize,
    username: model.$username,
    page: $currentPage,
  },
  clock: [Gate.open, currentPageWasSet],
  target: fetchFeedFx,
});
