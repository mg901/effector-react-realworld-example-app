import {
  createEvent,
  createEffect,
  createStore,
  sample,
  forward,
  guard,
} from 'effector';
import { useStore, createGate } from 'effector-react';
import * as article from '@/entities/article';
import * as http from '@/shared/http';
import { limit } from '@/shared/library/limit';
import { createQueryStore, $locationPathname, history } from '@/shared/router';

export const pageChanged = createEvent<number>();

type GetArticlesFx = {
  page: number;
  tag: string | null;
};

export const getArticlesFx = createEffect(({ page, tag }: GetArticlesFx) => {
  const pageIndex = page - 1;

  return http.request<article.types.FeedType>({
    url: `articles?tag=${encodeURIComponent(String(tag))}&${limit(
      10,
      pageIndex,
    )}`,
    method: 'get',
  });
});

type ChangePageFx = {
  pathname: string;
  page: number;
};

const changePageFx = createEffect(({ pathname, page }: ChangePageFx) => {
  history.push({
    pathname,
    search: `?page=${page}`,
  });
});

export const Gate = createGate();
const $pageSize = createStore<number>(10);

export const { feedLoaded, $articlesList, $articles, $totalPages } =
  article.createFeed();

const $pageQuery = createQueryStore('page').map((page) =>
  page ? Number(page) : 1,
);
const $tagQuery = createQueryStore('tag');

sample({
  source: {
    page: $pageQuery,
    tag: $tagQuery,
  },
  clock: [Gate.open, $pageQuery, guard($tagQuery, { filter: Boolean })],
  target: getArticlesFx,
});

forward({
  from: getArticlesFx.doneData,
  to: feedLoaded,
});

sample({
  source: {
    pathname: $locationPathname,
    page: $pageQuery,
  },
  clock: pageChanged,
  target: changePageFx,
});

export const selectors = {
  usePageSize: () => useStore($pageSize),
  useArticlesList: () => useStore($articlesList),
  useCurrentPage: () => useStore($pageQuery),
  useGetArticlesLoading: (): boolean => useStore(getArticlesFx.pending),
  useTotalPages: () => useStore($totalPages),
};
