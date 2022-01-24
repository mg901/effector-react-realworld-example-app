import { useGate } from 'effector-react';
import * as article from '@/entities/article';
import { Pagination } from '@/shared/ui';
import * as model from './model';

const YourFeedPage = () => {
  useGate(model.Gate);
  const articles = model.selectors.useArticlesList();
  const pageSize = model.selectors.usePageSize();
  const loading = model.selectors.useGetArticlesPending();
  const totalPages = model.selectors.useTotalPages();
  const currentPage = model.selectors.useCurrentPage();

  return (
    <>
      <article.Feed
        articles={articles}
        isEmpty={false}
        loading={loading}
        onFavoriteToggle={(_) => _}
      />
      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={totalPages}
        onPageChange={model.pageChanged}
      />
    </>
  );
};

export default YourFeedPage;
