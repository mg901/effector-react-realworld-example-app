import { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useQueryParam, withDefault, NumberParam } from 'use-query-params';
import * as article from '@/entities/article';
import * as visitor from '@/entities/visitor';
import { ROUTES } from '@/shared/router';
import { Pagination } from '@/shared/ui';
import * as model from './model';

type Props = Readonly<{
  pageSize?: number;
}>;

const GlobalFeedPage = ({ pageSize = 10 }: Props) => {
  const isAuth = visitor.selectors.useIsAuthorized();
  const [page, setPage] = useQueryParam('page', withDefault(NumberParam, 1));
  const loading = model.selectors.useGetFeedLoading();
  const isEmpty = model.selectors.useIsEmptyFeed();
  const totalPages = model.selectors.useTotalPages();

  useEffect(() => {
    model.getFeedFx({ pageSize, page });
  }, [page, pageSize]);

  const handlePageChange = (x: number) => {
    setPage(x);
  };

  return (
    <>
      {isAuth ? null : <Redirect from={ROUTES.globalFeed} to="/" />}
      <article.Feed
        articlesStore={model.$articles}
        isEmpty={isEmpty}
        loading={loading}
        onFavoriteToggle={model.favoriteArticleToggled}
      />
      <Pagination
        current={page}
        pageSize={pageSize}
        total={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default GlobalFeedPage;
