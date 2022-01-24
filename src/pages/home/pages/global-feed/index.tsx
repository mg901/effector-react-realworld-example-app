import { Redirect } from 'react-router-dom';
import { useGate } from 'effector-react';
import * as article from '@/entities/article';
import * as visitor from '@/entities/visitor';
import { ROUTES } from '@/shared/router';
import { Pagination } from '@/shared/ui';
import * as model from './model';

const GlobalFeedPage = () => {
  useGate(model.Gate);
  const isAuth = visitor.selectors.useIsAuthorized();
  const pageSize = model.selectors.usePageSize();
  const articles = model.selectors.useArticlesList();
  const currentPage = model.selectors.useCurrentPage();
  const loading = model.selectors.useGetFeedPending();
  const totalPages = model.selectors.useTotalPages();

  return (
    <>
      {isAuth ? null : <Redirect from={ROUTES.globalFeed} to="/" />}
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

export default GlobalFeedPage;
