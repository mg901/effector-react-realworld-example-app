import { createEffect, createStore, combine } from 'effector';
import { createGate } from 'effector-react';
import { $location } from '../../router';
import { get } from '../../api';
import { limit } from '../../library';
import { Feed } from '../types';

type Foo = {
  tag: string;
  page: number;
};

export const PageGate = createGate();

export const getFeedByTagFx = createEffect({
  handler: ({ tag, page }: Foo) =>
    get<Feed>(
      `/articles?tag=${encodeURIComponent(tag)}&${limit(10, page - 1)}`,
    ),
});

export const $currentPage = createStore<number>(1);

export const $$currentTag = $location.map(
  (x) => new URLSearchParams(x.search).get('name') as string,
);

export const $feed = createStore<Record<string, Feed>>({});
export const $$feedByTag = combine(
  $feed,
  $$currentTag,
  (feed, tag) =>
    feed[tag] ?? {
      articles: [],
      articlesCount: 0,
    },
);

export const $$articles = $$feedByTag.map((x) => x.articles);

$$articles.watch((x) => console.log('articles', x));
