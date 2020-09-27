import { createEffect } from 'effector';
import { createGate } from 'effector-react';
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
  $isEmptyArticles,
  $totalPages,
  $feed,
} = feed.createFeedModel();
