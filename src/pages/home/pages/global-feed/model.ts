import { createEffect } from 'effector';
import { useStore } from 'effector-react';
import * as article from 'entities/article';
import * as api from 'shared/api';

import { limit } from 'shared/library/limit';

export type getFeedFxArgs = {
  pageSize: number;
  page: number;
};

export const getFeedFx = createEffect(
  async ({ pageSize, page }: getFeedFxArgs) => {
    const pageIndex = page - 1;
    const { data } = await api.get<article.types.FeedType>(
      `articles?${limit(pageSize, pageIndex)}`,
    );

    return data;
  },
);

export const {
  favoriteArticleToggled,
  $feed,
  $isEmptyFeed,
  $articles,
  $totalPages,
} = article.createFeed({
  effect: getFeedFx,
});

export const selectors = {
  useGetFeedPending: () => useStore(getFeedFx.pending),
  useIsEmptyFeed: () => useStore($isEmptyFeed),
  useTotalPages: () => useStore($totalPages),
};
