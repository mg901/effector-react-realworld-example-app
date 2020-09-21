import React from 'react';
import { RouteConfigComponentProps } from 'react-router-config';
import { useGate, useList, useStore } from 'effector-react';
import { ArticlePreview } from 'features/article-preview';
import { EmptyArticles } from 'ui';
import { model } from '../model';
import { Pagination } from './pagination';
import '../model/init';

type Props = Readonly<RouteConfigComponentProps>;

export const YourFeedPage: React.FC<Props> = ({ match: { path } }) => {
  useGate(model.PageGate);
  const isEmpty = useStore(model.$isEmptyArticles);

  return (
    <div>
      {isEmpty && <EmptyArticles />}
      <ul>
        {useList(model.$articles, (article) => (
          <li>
            <ArticlePreview
              {...article}
              onClick={() => model.favoriteToggled(article)}
            />
          </li>
        ))}
      </ul>
      <Pagination path={path} />
    </div>
  );
};
