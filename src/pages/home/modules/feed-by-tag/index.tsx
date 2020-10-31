import React from 'react';
import { useGate, useList, useStore } from 'effector-react';
import {
  EmptyArticles,
  ArticlesWrapper,
  ArticlePreview,
} from 'shared-modules/feed';
import { Pagination, Spinner } from 'ui';
import * as model from './model';

export const FeedByTagPage: React.FC = () => {
  useGate(model.Gate);

  // prettier-ignore
  const { 
    isEmptyFeed, 
    currentPage, 
    pageSize, 
    totalPages, 
    loading 
  } = useStore(
    model.$feedModel,
  );

  return (
    <>
      <EmptyArticles show={isEmptyFeed} />
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
