import React from 'react';
import { useGate, useList, useStore } from 'effector-react';
import { EmptyArticles, ArticlesWrapper, ArticlePreview } from 'features/feed';
import { Pagination, Spinner } from 'ui';
import { model } from './model';
import './model/init';

export const FeedByTagPage: React.FC = () => {
  useGate(model.PageGate);
  const { totalPages, currentPage, pageSize } = model.useModel();
  const loading = useStore(model.$loading);
  const isEmpty = useStore(model.$isEmptyFeed);

  return (
    <>
      <EmptyArticles show={isEmpty} />
      <ArticlesWrapper>
        {useList(model.$articles, (article) => (
          <li>
            <ArticlePreview
              data={article}
              onClick={() => {
                model.favoriteToggled(article);
              }}
            />
          </li>
        ))}
      </ArticlesWrapper>
      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={totalPages}
        onItemClick={model.currentPageWasSet}
      />
      <Spinner loading={loading} />
    </>
  );
};
