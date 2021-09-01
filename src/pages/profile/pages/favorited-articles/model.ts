import { createEffect, sample } from 'effector';
import { status } from 'patronum/status';
import * as feed from 'shared/feed';
import { api } from 'api';
import { limit } from 'library/limit';
import * as model from '../../model';
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
  favoriteToggled,
  $currentPage,
  $articles,
  $totalPages,
  $feed,
  $pageSize,
  setUnfavoriteArticleFx,
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
  clock: [Gate.open, currentPageWasSet, setUnfavoriteArticleFx.done],
  target: fetchFeedFx,
});
