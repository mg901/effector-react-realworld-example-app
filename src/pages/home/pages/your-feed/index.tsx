import { useEffect } from 'react';
import * as article from 'entities/article';
import { Pagination } from 'shared/ui';
import { useQueryParam, withDefault, NumberParam } from 'use-query-params';
import * as model from './model';

type Props = Readonly<{
  pageSize?: number;
}>;

const YourFeedPage: React.FC<Props> = ({ pageSize = 10 }) => {
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

  return (
    <>
      <article.Feed
        articlesStore={model.$articles}
        isEmpty={isEmpty}
        loading={loading}
        onFavoriteToggle={model.favoriteArticleToggled}
      />
      <Pagination
        current={page}
        pageSize={pageSize}
        total={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default YourFeedPage;
