import { useStore } from 'effector-react';
import * as feed from 'entities/article-list';
import { $feed, fetchFeedFx, $isEmptyFeed } from './model';

export const useFeed = (): feed.types.Feed => useStore($feed);
export const useLoading = (): boolean => useStore(fetchFeedFx.pending);
export const useIsEmptyFeed = (): boolean => useStore($isEmptyFeed);
