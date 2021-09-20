import { useGate } from 'effector-react';
import * as article from 'entities/article';
import {
  Gate,
  paginationChanged,
  favoriteArticleToggled,
  $articles,
  selectors,
} from './model';

const GlobalFeedPage: React.FC = () => {
  useGate(Gate);
  const loading = selectors.useLoading();
  const isEmpty = selectors.useIsEmpty();
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

export default GlobalFeedPage;
