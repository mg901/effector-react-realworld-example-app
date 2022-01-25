import { createEffect, createStore, sample } from 'effector';
import { useStore, createGate } from 'effector-react';
import * as article from '@/entities/article';
import * as http from '@/shared/http';
import { limit } from '@/shared/library/limit';
import { createQueryStore } from '@/shared/router';
import * as profile from '../../model';

export const { feedLoaded, $articlesList, $totalPages } = article.createFeed();

export type GetArticlesFx = {
  username: string;
  page: number;
};

export const getArticlesFx = createEffect(
  ({ username, page }: GetArticlesFx) => {
    const pageIndex = page - 1;

    return http.request<article.types.FeedType>({
      url: `articles?author=${encodeURIComponent(username)}&${limit(
        5,
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
    page: $pageQuery,
    username: profile.$username,
  },
  clock: [Gate.open, $pageQuery, profile.$username.updates],
  target: getArticlesFx,
});

export const selectors = {
  usePageSize: () => useStore($pageSize),
  useCurrentPage: () => useStore($pageQuery),
  useArticlesList: () => useStore($articlesList),
  useGetFeedPending: () => useStore(getArticlesFx.pending),
  useTotalPages: () => useStore($totalPages),
};
