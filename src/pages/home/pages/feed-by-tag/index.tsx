import { useEffect } from 'react';
import * as article from 'entities/article';
import { Pagination } from 'shared/ui';
import {
  useQueryParams,
  withDefault,
  NumberParam,
  StringParam,
} from 'use-query-params';
import * as model from './model';

type Props = Readonly<{
  pageSize?: number;
}>;

const FeedByTagPage: React.FC<Props> = ({ pageSize = 10 }) => {
  const [{ page, tag }, setQuery] = useQueryParams({
    page: withDefault(NumberParam, 1),
    tag: StringParam,
  });
  const loading = model.selectors.useGetFeedPending();
  const isEmpty = model.selectors.useIsEmptyFeed();
  const totalPages = model.selectors.useTotalPages();

  useEffect(() => {
    if (tag) {
      model.getFeedFx({ page, tag, pageSize });
    }
  }, [page, tag, pageSize]);

  const handlePageChange = (x: number) => {
    setQuery({ page: x });
  };

  return (
    <>
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

export default FeedByTagPage;
