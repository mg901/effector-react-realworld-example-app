import { useGate } from 'effector-react';
import * as article from 'entities/article';
import {
  Gate,
  favoriteArticleToggled,
  $articles,
  selectors,
  paginationChanged,
} from './model';

const MyArticlesPage: React.FC = () => {
  useGate(Gate);
  const loading = selectors.useGetFeedPending();
  const isEmpty = selectors.useIsEmptyFeed();
  const pageSize = selectors.usePageSize();
  const pageNumber = selectors.usePageNumber();
  const totalPages = selectors.useTotalPages();

  return (
    <article.Feed
      articles={$articles}
      isEmpty={isEmpty}
      loading={loading}
      pageNumber={pageNumber}
      pageSize={pageSize}
      totalPages={totalPages}
      onArticleClick={favoriteArticleToggled}
      onPageChange={paginationChanged}
    />
  );
};

export default MyArticlesPage;
