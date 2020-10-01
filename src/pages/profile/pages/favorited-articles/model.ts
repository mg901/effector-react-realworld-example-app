import { createEffect } from 'effector';
import { status } from 'patronum/status';
import * as api from 'api';
import * as feed from 'features/feed';
import { limit } from 'library/limit';
import { types } from '../../model';

export const fetchFeedFx = createEffect(
  ({ username, page, pageSize }: types.GetFeedFxArgs) =>
    api.get<feed.types.Feed>(
      `/articles?favorited=${encodeURIComponent(username)}&${limit(
        pageSize,
        page,
      )}`,
    ),
);

export const {
  PageGate,
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
