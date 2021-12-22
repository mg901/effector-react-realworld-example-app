import { useEffect } from 'react';
import * as article from 'entities/article';
import { Pagination } from 'shared/ui';
import { useQueryParam, withDefault, NumberParam } from 'use-query-params';
import * as profile from '../../model';
import * as model from './model';

type Props = Readonly<{
  pageSize?: number;
}>;

const FavoritedArticlesPage: React.FC<Props> = ({ pageSize = 5 }) => {
  const [page, setPage] = useQueryParam('page', withDefault(NumberParam, 1));
  const username = profile.selectors.useUserName();
  const loading = model.selectors.useGetFeedPending();
  const isEmpty = model.selectors.useIsEmptyFeed();
  const totalPages = model.selectors.useTotalPages();

  useEffect(() => {
    model.getFeedFx({ username, page, pageSize });
  }, [username, page, pageSize]);

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

export default FavoritedArticlesPage;
