import { createEffect, attach } from 'effector';
import { createGate } from 'effector-react';
import * as api from '../../../../../api';
import * as feed from '../../../../../features/feed';
import { limit } from '../../../../../library';
import * as profile from '../../../model';
import { types } from '../../../model';

export const getFeedFx = createEffect(
  ({ username, page }: types.GetFeedFxArgs) =>
    api.get<feed.types.Feed>(
      `/articles?favorited=${encodeURIComponent(username)}&${limit(5, page)}`,
    ),
);

export const PageGate = createGate();
export const {
  $currentPage,
  currentPageSetted,
  $articles,
  $totalPages,
  $feed: $favoritedArticles,
} = feed.createFeedModel();

export const $isEmptyArticles = $articles.map((x) => x.length === 0);
export const getFavoritedArticlesFx = attach({
  source: { username: profile.model.$username, page: $currentPage },
  effect: getFeedFx,
});
