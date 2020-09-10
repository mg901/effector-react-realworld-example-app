import { createEvent, createEffect, createStore, combine } from 'effector';
import { createGate } from 'effector-react';
import * as router from '../../../core/router';
import { get } from '../../../api';
import { limit } from '../../../library';
import * as types from './types';

export const PageGate = createGate();
export const currentPageSetted = createEvent<number>();

export const getFeedByTagFx = createEffect(
  ({ tag, page }: types.GetFeedByTagArgs) =>
    get<types.Feed>(
      `/articles?tag=${encodeURIComponent(tag)}&${limit(10, page - 1)}`,
    ),
);

export const $currentTag = router.model.$location.map(
  (x) => new URLSearchParams(x.search).get('name') as string,
);

export const $feed = createStore<Record<string, types.Feed>>({}).on(
  getFeedByTagFx.done,
  (state, { params, result }) => ({
    ...state,
    [params.tag]: result,
  }),
);

export const $feedByTag = combine(
  $feed,
  $currentTag,
  (feed, tag) =>
    feed[tag] ?? {
      articles: [],
      articlesCount: 0,
    },
);

export const $articles = $feedByTag.map((x) => x.articles);
export const $totalPages = $feedByTag.map((x) => x.articlesCount);
