import React from 'react';
import { useGate, useList, useStore } from 'effector-react';
import { EmptyArticles, ArticlesWrapper, ArticlePreview } from 'features/feed';
import { Spinner } from 'ui';

import { model } from '../model';
import { Pagination } from './pagination';

import '../model/init';

export const FeedByTagPage: React.FC = () => {
  useGate(model.PageGate);
  const loading = useStore(model.$loading);
  const isEmpty = useStore(model.$isEmptyArticles);

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
      <Pagination />
      <Spinner loading={loading} />
    </>
  );
};
