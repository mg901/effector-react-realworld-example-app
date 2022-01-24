import { useGate } from 'effector-react';
import * as article from '@/entities/article';
import { Pagination } from '@/shared/ui';
import * as model from './model';

const MyArticlesPage = () => {
  useGate(model.Gate);
  const pageSize = model.selectors.usePageSize();
  const currentPage = model.selectors.useCurrentPage();
  const loading = model.selectors.useGetFeedPending();
  const totalPages = model.selectors.useTotalPages();
  const articles = model.selectors.useArticlesList();

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
        onPageChange={(_) => _}
      />
    </>
  );
};

export default MyArticlesPage;
