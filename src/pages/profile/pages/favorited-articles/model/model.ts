import { createEffect, combine } from 'effector';
import { createGate } from 'effector-react';
import { status } from 'patronum/status';
import * as api from 'api';
import * as feed from 'features/feed';
import { limit } from 'library/limit';
import { types } from '../../../model';

export const getFeedFx = createEffect(
  ({ username, page }: types.GetFeedFxArgs) =>
    api.get<feed.types.Feed>(
      `/articles?favorited=${encodeURIComponent(username)}&${limit(5, page)}`,
    ),
);

export const PageGate = createGate();
export const {
  currentPageSettled,
  favoriteToggled,
  $currentPage,
  $articles,
  $totalPages,
  $feed,
} = feed.createFeedModel();

export const $status = status({ effect: getFeedFx });
export const $isEmptyArticles = combine(
  $status,
  $articles,
  (is, articles) => is === 'done' && articles.length === 0,
);
