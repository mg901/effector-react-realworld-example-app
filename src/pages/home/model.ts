import {
  createEffect,
  createEvent,
  createStore,
  forward,
  restore,
  sample,
} from 'effector';
import { useStore, createGate } from 'effector-react';
import * as article from '@/entities/article';
import * as http from '@/shared/http';
import { history, createQueryStore, $locationPathname } from '@/shared/router';

export const pageChanged = createEvent<number>();
export const tagSelected = createEvent<string>();
export const getTagsFx = createEffect(() => {
  return http
    .request<{ tags: article.types.Article['tagList'] }>({
      url: 'tags',
      method: 'get',
    })
    .then((response) => response.tags);
});

type SetPageQueryFx = {
  pathname: string;
  page: number;
};

const setPageQueryFx = createEffect(({ pathname, page }: SetPageQueryFx) => {
  history.push({
    pathname,
    search: `?page=${page}`,
  });
});

export const Gate = createGate();
export const $tags = restore(getTagsFx.doneData, []);
export const $pageSize = createStore<number>(10);
export const $tagQuery = createQueryStore('tag');
export const $currentPage = createQueryStore('page').map((page) =>
  page ? Number(page) : 1,
);

forward({
  from: Gate.open,
  to: getTagsFx,
});

sample({
  source: {
    page: $currentPage,
    pathname: $locationPathname,
  },
  clock: pageChanged,
  target: setPageQueryFx,
});

export const selectors = {
  useTagQuery: () => useStore($tagQuery),
  useLoadTags: () => useStore(getTagsFx.pending),
};
