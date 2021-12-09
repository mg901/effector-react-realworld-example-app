import { createEffect, createStore, StoreValue, guard } from 'effector';
import { createGate, useStore } from 'effector-react';
import * as article from 'entities/article';
import * as api from 'shared/api';
import { limit } from 'shared/library/limit';
import { syncPaginationWithQueryParams } from 'shared/library/sync-pagination-with-query-params';
import * as profile from '../../model';

export type getFeedFxArgs = Readonly<{
  username: string;
  pageIndex: number;
  pageSize: number;
}>;

export const getFeedFx = createEffect(
  ({ username, pageIndex, pageSize }: getFeedFxArgs) => {
    return api
      .get<article.types.FeedType>(
        `articles?favorited=${encodeURIComponent(username)}&${limit(
          pageSize,
          pageIndex,
        )}`,
      )
      .then((response) => response.data);
  },
);

export const $pageSize = createStore(5);

export const { queryParamsSetted, $pageIndex, $pageNumber } =
  syncPaginationWithQueryParams();

export const {
  favoriteArticleToggled,
  $feed,
  $isEmptyFeed,
  $articles,
  $totalPages,
  setUnfavoriteArticleFx,
} = article.createFeed({
  effect: getFeedFx,
});

export const Gate = createGate();

guard({
  source: {
    username: profile.$username,
    pageSize: $pageSize,
    pageIndex: $pageIndex,
  },
  filter: (x): x is getFeedFxArgs => Boolean(x.username),
  clock: [Gate.open, queryParamsSetted, setUnfavoriteArticleFx.done],
  target: getFeedFx,
});

export const selectors = {
  useGetFeedPending: (): boolean => useStore(getFeedFx.pending),

  useIsEmptyFeed: (): StoreValue<typeof $isEmptyFeed> => useStore($isEmptyFeed),
  useTotalPages: (): StoreValue<typeof $totalPages> => useStore($totalPages),

  usePageSize: (): StoreValue<typeof $pageSize> => useStore($pageSize),
  usePageNumber: (): StoreValue<typeof $pageNumber> => useStore($pageNumber),
};
