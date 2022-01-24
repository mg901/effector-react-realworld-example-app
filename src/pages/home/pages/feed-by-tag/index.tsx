import { useGate } from 'effector-react';
import * as article from '@/entities/article';
import { Pagination } from '@/shared/ui';
import * as model from './model';

const FeedByTagPage = () => {
  useGate(model.Gate);
  const pageSize = model.selectors.usePageSize();
  const articles = model.selectors.useArticlesList();
  const currentPage = model.selectors.useCurrentPage();
  const loading = model.selectors.useGetArticlesLoading();
  const totalPages = model.selectors.useTotalPages();

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

export default FeedByTagPage;
