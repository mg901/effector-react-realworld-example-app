import { createEffect } from 'effector';
import { useStore } from 'effector-react';
import * as article from '@/entities/article';
import * as api from './api';

export const getFeedFx = createEffect(api.getFeed);

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
  useGetFeedLoading: (): boolean => useStore(getFeedFx.pending),
  useIsEmptyFeed: () => useStore($isEmptyFeed),
  useTotalPages: () => useStore($totalPages),
};
