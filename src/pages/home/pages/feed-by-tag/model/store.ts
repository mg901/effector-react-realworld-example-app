import { createEffect } from 'effector';
import { useStore } from 'effector-react';
import * as article from 'entities/article';
import * as endpoints from './endpoints';

export const getFeedFx = createEffect(endpoints.getFeed);

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
