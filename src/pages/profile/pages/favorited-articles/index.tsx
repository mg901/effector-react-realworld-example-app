import { useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as article from 'entities/article';
import {
  paginationChanged,
  favoriteArticleToggled,
  $articles,
  selectors,
  getFeedFx,
} from './model';

const FavoritedArticlesPage: React.FC = () => {
  const { username } = useParams<{ username: string }>();
  const loading = selectors.useLoading();
  const isEmpty = selectors.useIsEmpty();
  const pageSize = selectors.usePageSize();
  const pageIndex = selectors.usePageIndex();
  const pageNumber = selectors.usePageNumber();
  const totalPages = selectors.useTotalPages();

  const handleGetFeed = useCallback(() => {
    getFeedFx({ username, pageIndex, pageSize });
  }, [username, pageIndex, pageSize]);

  const handlePageChange = (page: number) => {
    paginationChanged(page);
    handleGetFeed();
  };

  useEffect(() => {
    handleGetFeed();
  }, [handleGetFeed]);

  return (
    <article.Feed
      articles={$articles}
      isEmpty={isEmpty}
      loading={loading}
      pageNumber={pageNumber}
      pageSize={pageSize}
      totalPages={totalPages}
      onArticleClick={favoriteArticleToggled}
      onPageChange={handlePageChange}
    />
  );
};

export default FavoritedArticlesPage;
