import { createEffect, createStore, attach, combine } from 'effector';
import { createGate } from 'effector-react';
import { get } from '../../../../api';
import * as feed from '../../../../features/feed';
import { limit } from '../../../../library';
import { GetFeedByTagArgs, FeedByTag } from './types';

export const PageGate = createGate();
export const {
  currentPageSetted,
  $currentTag,
  $currentPage,
} = feed.createFeedModel();

export const getFeedFx = createEffect(({ tag, page }: GetFeedByTagArgs) =>
  get<feed.types.Feed>(
    `/articles?tag=${encodeURIComponent(tag)}&${limit(10, page)}`,
  ),
);

export const getFeedByTagFx = attach({
  source: { tag: $currentTag, page: $currentPage },
  effect: getFeedFx,
});

export const $feed = createStore<FeedByTag>({}).on(
  getFeedFx.done,
  (state, { params, result }) => ({
    ...state,
    [params.tag]: result,
  }),
);

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
export const $totalPages = $feedByTag.map((x) => x.articlesCount);
