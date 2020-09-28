import { createEffect, createStore, combine } from 'effector';
import { createGate } from 'effector-react';
import { status } from 'patronum/status';
import * as api from 'api';
import * as feed from 'features/feed';
import { limit } from 'library/limit';
import * as router from 'library/router';
import * as types from './types';

export const PageGate = createGate();
export const {
  currentPageSettled,
  favoriteToggled,
  $currentTag,
  $currentPage,
  $pageSize,
  setFavoriteArticleFx,
  setUnfavoriteArticleFx,
} = feed.createFeedModel();

export const getFeedFx = createEffect(({ tag, page }: types.GetFeedByTagArgs) =>
  api.get<feed.types.Feed>(
    `/articles?tag=${encodeURIComponent(tag)}&${limit(10, page)}`,
  ),
);

export const changeUrlFx = createEffect(
  ({ path, tag, page }: types.ChangeUrlFxArgs) => {
    router.model.history.replace(`${path}?tag=${tag}&page=${page}`);
  },
);

export const $status = status({ effect: getFeedFx });
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

export const $noCurrentTag = combine(
  $currentTag,
  $feed,
  (tag, feedStore) => !feedStore[tag],
);

export const $articles = $feedByTag.map((x) => x.articles);
export const $totalPages = $feedByTag.map((x) => x.articlesCount);

export const $isEmptyArticles = combine(
  $status,
  $articles,
  (is, articles) => is === 'done' && articles.length === 0,
);
