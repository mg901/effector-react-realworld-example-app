import { useEffect } from 'react';
import { useQueryParam, withDefault, NumberParam } from 'use-query-params';
import * as article from '@/entities/article';
import { Pagination } from '@/shared/ui';
import * as profile from '../../model';
import * as model from './model/store';

type Props = Readonly<{
  pageSize?: number;
}>;

const MyArticlesPage = ({ pageSize = 5 }: Props) => {
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
  const [page, setPage] = useQueryParam('page', withDefault(NumberParam, 1));
  const username = profile.selectors.useProfileUsername();
  const loading = model.selectors.useGetFeedLoading();
  const isEmpty = model.selectors.useIsEmptyFeed();
  const totalPages = model.selectors.useTotalPages();

  useEffect(() => {
    model.getFeedFx({ username, page, pageSize });
  }, [username, page, pageSize]);

  const handlePageChange = (x: number) => {
    setPage(x);
  };

  return {
    page,
    loading,
    isEmpty,
    totalPages,
    handlePageChange,
  };
}

export default MyArticlesPage;
