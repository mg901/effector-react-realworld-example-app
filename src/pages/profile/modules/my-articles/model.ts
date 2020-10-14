import { createEffect, forward, attach } from 'effector-root';
import { status } from 'patronum/status';
import { request } from 'api';
import { limit } from 'library/limit';
import * as feed from 'modules/feed';
import * as model from '../../model';
import * as types from '../../model/types';

export const fetchFeedFx = createEffect(
  ({ username, page, pageSize }: types.FetchFeedFxArgs) =>
    request
      .get<feed.types.Feed>(
        `articles?author=${encodeURIComponent(username)}&${limit(
          pageSize,
          page,
        )}`,
      )
      .then((x) => x.data),
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
