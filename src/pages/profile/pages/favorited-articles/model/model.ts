import { createEffect, combine } from 'effector';
import { status } from 'patronum/status';
import * as api from 'api';
import * as feed from 'features/feed';
import { limit } from 'library/limit';
import { types } from '../../../model';

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
} = feed.createFeedModel({
  pageSize: 5,
});

export const $status = status({ effect: fetchFeedFx });
export const $isEmptyArticles = combine(
  $status,
  $articles,
  (is, articles) => is === 'done' && articles.length === 0,
);
