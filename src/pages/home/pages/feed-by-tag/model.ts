import {
  createEvent,
  createEffect,
  createStore,
  attach,
  combine,
} from 'effector';
import { createGate } from 'effector-react';
import { get } from '../../../../api';
import * as router from '../../../../core/router';
import { limit } from '../../../../library';
import * as types from '../../model/types';
import { GetFeedByTagArgs, FeedByTag } from './types';

export const PageGate = createGate();
export const currentPageSetted = createEvent<number>();

export const getFeedFx = createEffect(({ tag, page }: GetFeedByTagArgs) =>
  get<types.Feed>(
    `/articles?tag=${encodeURIComponent(tag)}&${limit(10, page - 1)}`,
  ),
);

export const $currentTag = router.model.$search.map(
  (x) => new URLSearchParams(x).get('name') as string,
);

export const $currentPage = router.model.$search.map((x) => {
  const page = new URLSearchParams(x).get('page') ?? 1;

  return Number(page);
});

const getFeedByTagFx = attach({
  source: $currentTag,
  effect: getFeedFx,
  mapParams: (params: GetFeedByTagArgs, tag) => ({ ...params, tag }),
});

export const $feed = createStore<FeedByTag>({}).on(
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
