import { createEffect, forward, attach } from 'effector-root';
import { status } from 'patronum/status';
import * as feed from 'shared/feed';
import { api } from 'api';
import { limit } from 'library/limit';
import * as model from '../../model';
import * as types from '../../model/types';

export const fetchFeedFx = createEffect<types.FetchFeedFxArgs, feed.types.Feed>(
  ({ username, page, pageSize }) =>
    api
      .get(
        `articles?author=${encodeURIComponent(username)}&${limit(
          pageSize,
          page,
        )}`,
      )
      .then(({ data }) => data),
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

forward({
  from: [Gate.open, currentPageWasSet],
  to: attach({
    source: {
      username: model.$username,
      page: $currentPage,
      pageSize: $pageSize,
    },
    effect: fetchFeedFx,
  }),
});
