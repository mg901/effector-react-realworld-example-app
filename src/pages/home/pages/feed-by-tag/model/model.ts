import { createEffect, createStore, attach, combine } from 'effector';
import { createGate } from 'effector-react';
import * as api from 'api';
import * as feed from 'features/feed';
import { limit } from 'library/limit';
import { GetFeedByTagArgs, FeedByTag } from './types';

export const PageGate = createGate();
export const {
  currentPageSetted,
  favoriteToggled,
  $currentTag,
  $currentPage,
  setFavoriteArticleFx,
  setUnfavoriteArticleFx,
} = feed.createFeedModel();

export const getFeedFx = createEffect(({ tag, page }: GetFeedByTagArgs) =>
  api.get<feed.types.Feed>(
    `/articles?tag=${encodeURIComponent(tag)}&${limit(10, page)}`,
  ),
);

export const getFeedByTagFx = attach({
  source: { tag: $currentTag, page: $currentPage },
  effect: getFeedFx,
});

export const $feed = createStore<FeedByTag>({});

export const $feedByTag = combine(
  $feed,
  $currentTag,
  (feedStore, tag) =>
    feedStore[tag] ?? {
      articles: [],
      articlesCount: 0,
    },
);

export const $articles = $feedByTag.map((x) => x.articles);
export const $isEmptyArticles = $articles.map((x) => x.length === 0);
export const $totalPages = $feedByTag.map((x) => x.articlesCount);
