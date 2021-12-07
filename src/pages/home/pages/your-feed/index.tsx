import { useEffect } from 'react';
import * as article from 'entities/article';
import {
  queryParamsSetted,
  favoriteArticleToggled,
  $articles,
  getFeedFx,
  selectors,
} from './model';

const YourFeedPage: React.FC = () => {
  const loading = selectors.useGetFeedPending();
  const isEmpty = selectors.useIsEmptyFeed();
  const pageSize = selectors.usePageSize();
  const pageIndex = selectors.usePageIndex();
  const pageNumber = selectors.usePageNumber();
  const totalPages = selectors.useTotalPages();

  // console.log('your feed');

  const handlePageChange = (page: number) => {
    queryParamsSetted(page);
    getFeedFx({ pageSize, pageIndex });
  };

  useEffect(() => {
    getFeedFx({ pageSize, pageIndex });
  }, [pageSize, pageIndex]);

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

export default YourFeedPage;
