import React from 'react';
import { RouteConfigComponentProps } from 'react-router-config';
import { useGate, useList } from 'effector-react';
import { ArticlePreview, ArticlesList } from 'ui';
import { model } from '../model';
import { Pagination } from './pagination';
import '../model/init';

type Props = Readonly<RouteConfigComponentProps>;

export const MyArticles: React.FC<Props> = ({ match: { url } }) => {
  useGate(model.PageGate);

  return (
    <>
      <ArticlesList>
        {useList(model.$articles, (article) => (
          <li>
            <ArticlePreview
              {...article}
              onClick={() => model.favoriteToggled(article)}
            />
          </li>
        ))}
      </ArticlesList>
      <Pagination path={url} />
    </>
  );
};
