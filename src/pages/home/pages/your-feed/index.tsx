import { useEffect } from 'react';
import * as article from 'entities/article';
import { Pagination } from 'shared/ui';
import { useQueryParam, withDefault, NumberParam } from 'use-query-params';
import * as model from './model';

type Props = Readonly<{
  pageSize?: number;
}>;

const YourFeedPage: React.FC<Props> = ({ pageSize = 10 }) => {
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
  const loading = model.selectors.useGetFeedPending();
  const isEmpty = model.selectors.useIsEmptyFeed();
  const totalPages = model.selectors.useTotalPages();

  useEffect(() => {
    model.getFeedFx({ pageSize, page });
  }, [page, pageSize]);

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

export default YourFeedPage;
