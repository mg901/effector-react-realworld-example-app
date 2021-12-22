import { createEffect } from 'effector';
import { useStore } from 'effector-react';
import * as article from 'entities/article';
import * as api from 'shared/api';
import { limit } from 'shared/library/limit';

export type FetchFeedByTagArgs = Readonly<{
  tag: string;
  page: number;
  pageSize: number;
}>;

export const getFeedFx = createEffect(
  async ({ page, tag, pageSize }: FetchFeedByTagArgs) => {
    const pageIndex = page - 1;
    const { data } = await api.get<article.types.FeedType>(
      `articles?tag=${encodeURIComponent(tag)}&${limit(pageSize, pageIndex)}`,
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
  useGetFeedPending: (): boolean => useStore(getFeedFx.pending),
  useIsEmptyFeed: () => useStore($isEmptyFeed),
  useTotalPages: () => useStore($totalPages),
};
