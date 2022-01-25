import {
  createEvent,
  createEffect,
  createStore,
  sample,
  forward,
} from 'effector';
import { useStore, createGate } from 'effector-react';
import * as article from '@/entities/article';
import * as http from '@/shared/http';
import { limit } from '@/shared/library/limit';
import { createQueryStore, history, $locationPathname } from '@/shared/router';

export const pageChanged = createEvent<number>();
export const getArticlesFx = createEffect((page: number) => {
  const pageIndex = page - 1;

  return http.request<article.types.FeedType>({
    url: `articles/feed?${limit(10, pageIndex)}`,
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
export const $pageSize = createStore<number>(10);

export const { feedLoaded, $articlesList, $totalPages } = article.createFeed();
const $pageQuery = createQueryStore('page').map((page) =>
  page ? Number(page) : 1,
);

sample({
  source: $pageQuery,
  clock: [Gate.open, $pageQuery],
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
  useArticlesList: () => useStore($articlesList),
  usePageSize: () => useStore($pageSize),
  useCurrentPage: () => useStore($pageQuery),
  useGetArticlesPending: () => useStore(getArticlesFx.pending),
  useTotalPages: () => useStore($totalPages),
};
