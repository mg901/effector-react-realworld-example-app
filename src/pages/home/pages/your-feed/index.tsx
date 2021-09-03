import { useGate, useList } from 'effector-react';
import * as article from 'entities/article';
import { EmptyArticles, ArticlesWrapper, ArticlePreview } from 'shared/feed';
import { Pagination, Spinner } from 'shared/ui';
import * as yourFeed from './model';

const YourFeedPage: React.FC = () => {
  useGate(yourFeed.model.Gate);
  const loading = yourFeed.selectors.useLoading();
  const pageSize = yourFeed.selectors.usePageSize();
  const isEmptyFeed = yourFeed.selectors.useIsEmptyFeed();
  const currentPage = article.selectors.useCurrentPage();
  const totalPages = article.selectors.useTotalPages();

  return (
    <>
      <EmptyArticles show={isEmptyFeed} />
      <ArticlesWrapper>
        {useList(article.model.$articles, {
          getKey: (item) => item?.slug as string,
          fn: (item) => (
            <li>
              <ArticlePreview
                data={item}
                onClick={() => article.model.favoriteToggled(item)}
              />
            </li>
          ),
        })}
      </ArticlesWrapper>
      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={totalPages}
        onItemClick={article.model.currentPageWasSet}
      />
      <Spinner loading={loading} />
    </>
  );
};

export default YourFeedPage;
