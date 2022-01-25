import { createEffect, createStore, sample } from 'effector';
import { useStore, createGate } from 'effector-react';
import * as article from '@/entities/article';
import * as http from '@/shared/http';
import { limit } from '@/shared/library/limit';
import { createQueryStore } from '@/shared/router';
import * as profile from '../../model';

export const { $articlesList, $articles, $totalPages } = article.createFeed();

export type GetArticlesFx = {
  username: string;
  page: number;
  pageSize: number;
};

export const getArticlesFx = createEffect(
  ({ username, page, pageSize }: GetArticlesFx) => {
    const pageIndex = page - 1;

    return http.request<article.types.FeedType>({
      url: `articles?favorited=${encodeURIComponent(username)}&${limit(
        pageSize,
        pageIndex,
      )}`,
      method: 'get',
    });
  },
);

export const Gate = createGate();
const $pageSize = createStore<number>(5);
const $pageQuery = createQueryStore('page').map((page) =>
  page ? Number(page) : 1,
);

sample({
  source: {
    username: profile.$username,
    page: $pageQuery,
    pageSize: $pageSize,
  },
  clock: [Gate.open, profile.$username.updates, $pageQuery],
  target: getArticlesFx,
});

export const selectors = {
  usePageSize: () => useStore($pageSize),
  useCurrentPage: () => useStore($pageQuery),
  useArticlesList: () => useStore($articlesList),
  useGetFeedPending: () => useStore(getArticlesFx.pending),
  useTotalPages: () => useStore($totalPages),
};
