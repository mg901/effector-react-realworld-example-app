import React from 'react';
import { RouteConfigComponentProps } from 'react-router-config';
import { useGate, useList } from 'effector-react';
import { ArticlePreview, List } from 'ui';
import { model } from '../model';
import { Pagination } from './pagination';
import '../model/init';

type Props = Readonly<RouteConfigComponentProps>;

export const MyArticles: React.FC<Props> = ({ match: { url } }) => {
  useGate(model.PageGate);

  return (
    <>
      <List>
        {useList(model.$articles, (article) => (
          <li>
            <ArticlePreview
              {...article}
              onClick={() => model.favoriteToggled(article)}
            />
          </li>
        ))}
      </List>
      <Pagination path={url} />
    </>
  );
};
