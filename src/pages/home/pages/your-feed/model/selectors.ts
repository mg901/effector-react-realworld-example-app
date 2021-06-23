import { useStore } from 'effector-react';
import * as articleList from 'entities/article-list';
import {
  $feed,
  $currentPage,
  $pageSize,
  fetchFeedFx,
  $isEmptyFeed,
  $articlesCount,
} from './model';

export const useFeed = (): articleList.types.ArticleList => useStore($feed);
export const useCurrentPage = (): number => useStore($currentPage);
export const usePageSize = (): number => useStore($pageSize);
export const useArticlesCount = (): number => useStore($articlesCount);
export const useLoading = (): boolean => useStore(fetchFeedFx.pending);
export const useIsEmptyFeed = (): boolean => useStore($isEmptyFeed);
