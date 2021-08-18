import { createEffect, sample } from 'effector-root';
import { status } from 'patronum/status';
import * as api from 'shared/api';
import * as feed from 'shared/feed';
import { limit } from 'shared/library/limit';
import * as profile from '../../model';

export const fetchFeedFx = createEffect<
  profile.types.FetchFeedFxArgs,
  feed.types.Feed
>(({ username, page, pageSize }) => {
  return api
    .get(
      `articles?favorited=${encodeURIComponent(username)}&${limit(
        pageSize,
        page,
      )}`,
    )
    .then((response) => response.data);
});

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
    username: profile.model.$username,
    page: $currentPage,
  },
  clock: [Gate.open, currentPageWasSet, setUnfavoriteArticleFx.done],
  target: fetchFeedFx,
});
