import { createEffect, guard, StoreValue } from 'effector';
import { useStore, createGate } from 'effector-react';
import * as article from 'entities/article';
import { createPagination } from 'features/pagination';
import * as api from 'shared/api';
import { limit } from 'shared/library/limit';
import * as profile from '../../model';

export type getFeedFxArgs = {
  username: string;
  pageIndex: number;
  pageSize: number;
};

export const getFeedFx = createEffect<getFeedFxArgs, article.types.FeedType>(
  ({ username, pageIndex, pageSize }) => {
    return api
      .get(
        `articles?author=${encodeURIComponent(username)}&${limit(
          pageSize,
          pageIndex,
        )}`,
      )
      .then((x) => x.data);
  },
);

export const {
  favoriteArticleToggled,
  $feed,
  $isEmptyFeed,
  $articles,
  $totalPages,
} = article.model.createFeed({
  effect: getFeedFx,
});

export const { paginationChanged, $pageSize, $pageIndex, $pageNumber } =
  createPagination({
    pageSize: 5,
  });

export const Gate = createGate();

guard({
  source: {
    username: profile.model.$username,
    pageSize: $pageSize,
    pageIndex: $pageIndex,
  },
  filter: (x): x is getFeedFxArgs => Boolean(x.username),
  clock: [Gate.open, paginationChanged],
  target: getFeedFx,
});

export const selectors = {
  useGetFeedPending: (): boolean => useStore(getFeedFx.pending),

  useIsEmptyFeed: (): StoreValue<typeof $isEmptyFeed> => useStore($isEmptyFeed),
  useTotalPages: (): StoreValue<typeof $totalPages> => useStore($totalPages),

  usePageSize: (): StoreValue<typeof $pageSize> => useStore($pageSize),
  usePageNumber: (): StoreValue<typeof $pageNumber> => useStore($pageNumber),
};
