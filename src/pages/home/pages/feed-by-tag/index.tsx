import { useEffect } from 'react';
import * as article from 'entities/article';
import {
  queryParamsSetted,
  favoriteArticleToggled,
  getFeedFx,
  $articles,
  selectors,
} from './model';

const FeedByTagPage: React.FC = () => {
  const loading = selectors.useGetFeedPending();
  const isEmpty = selectors.useIsEmptyFeed();
  const tag = selectors.useCurrentTag();
  const pageSize = selectors.usePageSize();
  const pageIndex = selectors.usePageIndex();
  const pageNumber = selectors.usePageNumber();
  const totalPages = selectors.useTotalPages();

  // console.log('feed by tag');

  const handlePageChange = (page: number) => {
    queryParamsSetted(page);
    getFeedFx({ tag, pageSize, pageIndex });
  };

  useEffect(() => {
    getFeedFx({ tag, pageSize, pageIndex });
  }, [tag, pageSize, pageIndex]);

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

export default FeedByTagPage;
