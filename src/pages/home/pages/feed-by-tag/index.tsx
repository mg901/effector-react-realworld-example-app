import { useEffect } from 'react';
import {
  useQueryParams,
  withDefault,
  NumberParam,
  StringParam,
} from 'use-query-params';
import * as article from '@/entities/article';
import { Pagination } from '@/shared/ui';
import * as model from './model/store';

type Props = Readonly<{
  pageSize?: number;
}>;

const FeedByTagPage = ({ pageSize = 10 }: Props) => {
  const feed = useFeed(pageSize);

  return (
    <>
      <article.Feed
        articlesStore={model.$articles}
        isEmpty={feed.isEmpty}
        loading={feed.loading}
        onFavoriteToggle={model.favoriteArticleToggled}
      />
      <Pagination
        current={feed.page}
        pageSize={pageSize}
        total={feed.totalPages}
        onPageChange={feed.handlePageChange}
      />
    </>
  );
};

function useFeed(pageSize: number) {
  const [{ page, tag }, setQuery] = useQueryParams({
    page: withDefault(NumberParam, 1),
    tag: StringParam,
  });
  const loading = model.selectors.useGetFeedLoading();
  const isEmpty = model.selectors.useIsEmptyFeed();
  const totalPages = model.selectors.useTotalPages();

  useEffect(() => {
    if (tag) {
      model.getFeedFx({ page, tag, pageSize });
    }
  }, [page, tag, pageSize]);

  const handlePageChange = (x: number) => {
    setQuery({ page: x });
  };

  return {
    page,
    loading,
    isEmpty,
    totalPages,
    handlePageChange,
  };
}

export default FeedByTagPage;
