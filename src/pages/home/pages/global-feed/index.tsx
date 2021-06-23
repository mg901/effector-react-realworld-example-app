import { useGate, useList } from 'effector-react';
import { ArticlesWrapper, ArticlePreview, EmptyArticles } from 'shared/feed';
import { Spinner, Pagination } from 'shared/ui';
import * as globalFeed from './model';

const GlobalFeedPage: React.FC = () => {
  useGate(globalFeed.model.Gate);
  const loading = globalFeed.selectors.useLoading();
  const isEmptyFeed = globalFeed.selectors.useIsEmptyFeed();
  const currentPage = globalFeed.selectors.useCurrentPage();
  const articlesCount = globalFeed.selectors.useArticlesCount();
  const pageSize = globalFeed.selectors.usePageSize();

  return (
    <>
      <EmptyArticles show={isEmptyFeed} />
      <ArticlesWrapper>
        {useList(globalFeed.model.$articles, {
          getKey: (item) => item.slug,
          fn: (item) => (
            <li>
              <ArticlePreview
                data={item}
                onClick={() => globalFeed.model.favoriteToggled(item)}
              />
            </li>
          ),
        })}
      </ArticlesWrapper>
      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={articlesCount}
        onItemClick={globalFeed.model.currentPageWasSet}
      />
      <Spinner loading={loading} />
    </>
  );
};

export default GlobalFeedPage;
