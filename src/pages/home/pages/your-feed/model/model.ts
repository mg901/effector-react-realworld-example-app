import { createEvent, createEffect, attach } from 'effector';
import { createGate } from 'effector-react';
import { get } from '../../../../../api';
import * as feed from '../../../../../features/feed';
import { limit } from '../../../../../library';

export const PageGate = createGate();

export const toggleFavorite = createEvent<feed.types.Article>();

const getFeedFx = createEffect((page: number) =>
  get<feed.types.Feed>(`/articles/feed?${limit(10, page)}`),
);

export const {
  currentPageSetted,
  favoriteToggled,
  setFavoriteArticleFx,
  setUnfavoriteArticleFx,
  $currentPage,
  $currentTag,
  $feed: $yourFeed,
  $articles,
  $isEmptyArticles,
  $totalPages,
} = feed.createFeedModel();

export const getYourFeedFx = attach({
  source: $currentPage,
  effect: getFeedFx,
});
