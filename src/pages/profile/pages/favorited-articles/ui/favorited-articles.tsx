import React from 'react';
import { RouteConfigComponentProps } from 'react-router-config';
import { useGate, useList, useStore } from 'effector-react';
import { ArticlePreview, EmptyArticles, List } from 'ui';
import { model } from '../model';
import { Pagination } from './pagination';
import '../model/init';

type Props = Readonly<RouteConfigComponentProps>;

export const FavoritedArticles: React.FC<Props> = ({ match: { url } }) => {
  useGate(model.PageGate);
  const isEmpty = useStore(model.$isEmptyArticles);

  return (
    <div>
      {isEmpty && <EmptyArticles />}
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
    </div>
  );
};
