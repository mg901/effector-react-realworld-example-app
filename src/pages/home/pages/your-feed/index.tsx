import { useGate, useList } from 'effector-react';
import { EmptyArticles, ArticlesWrapper, ArticlePreview } from 'shared/feed';
import { Spinner, Pagination } from 'shared/ui';
import * as yourFeed from './model';

const YourFeedPage: React.FC = () => {
  useGate(yourFeed.model.Gate);
  const loading = yourFeed.selectors.useLoading();
  const isEmptyFeed = yourFeed.selectors.useIsEmptyFeed();
  const currentPage = yourFeed.selectors.useCurrentPage();
  const articlesCount = yourFeed.selectors.useArticlesCount();
  const pageSize = yourFeed.selectors.usePageSize();

  return (
    <>
      <EmptyArticles show={isEmptyFeed} />
      <ArticlesWrapper>
        {useList(yourFeed.model.$articles, {
          getKey: (item) => item.slug,
          fn: (item) => (
            <li>
              <ArticlePreview
                data={item}
                onClick={() => yourFeed.model.favoriteToggled(item)}
              />
            </li>
          ),
        })}
      </ArticlesWrapper>
      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={articlesCount}
        onItemClick={yourFeed.model.currentPageWasSet}
      />
      <Spinner loading={loading} />
    </>
  );
};

export default YourFeedPage;
