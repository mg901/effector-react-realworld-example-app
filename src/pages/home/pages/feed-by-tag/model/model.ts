import { createEvent, createEffect, createStore, combine } from 'effector';
import { status } from 'patronum/status';
import * as api from 'api';
import * as feed from 'features/feed';
import { limit } from 'library/limit';
import * as types from './types';

export const {
  PageGate,
  favoriteToggled,
  $currentPage,
  $currentTag,
  $pageSize,
  setFavoriteArticleFx,
  setUnfavoriteArticleFx,
} = feed.createFeedModel();

export const currentPageWasSet = createEvent<number>();

export const fetchFeedFx = createEffect(
  ({ tag, page }: types.GetFeedByTagArgs) =>
    api.get<feed.types.Feed>(
      `/articles?tag=${encodeURIComponent(tag)}&${limit(10, page)}`,
    ),
);

export const $status = status({ effect: fetchFeedFx });
export const $feed = createStore<types.FeedByTag>({});
export const $feedByTag = combine(
  $feed,
  $currentTag,
  (feedStore, tag) =>
    feedStore[tag] ?? {
      articles: [],
      articlesCount: 0,
    },
);

export const $loading = combine(
  $currentTag,
  $feed,
  fetchFeedFx.pending,
  (tag, feedStore, fetch) => !feedStore[tag] || fetch,
);

export const $articles = $feedByTag.map((x) => x.articles);
export const $totalPages = $feedByTag.map((x) => x.articlesCount);

export const $isEmptyArticles = combine(
  $status,
  $articles,
  (is, articles) => is === 'done' && articles.length === 0,
);
