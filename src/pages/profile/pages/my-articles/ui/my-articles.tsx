import React from 'react';
import { RouteConfigComponentProps } from 'react-router-config';
import { useGate, useList, useStore } from 'effector-react';
import { ArticlePreview, List, Loader, EmptyArticles } from 'ui';
import { model } from '../model';
import { Pagination } from './pagination';

import '../model/init';

type Props = Readonly<RouteConfigComponentProps>;

export const MyArticles: React.FC<Props> = ({ match: { url } }) => {
  useGate(model.PageGate);
  const loading = useStore(model.getFeedFx.pending);
  const isEmpty = useStore(model.$isEmptyArticles);

  return (
    <>
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
      <Loader loading={loading} />
    </>
  );
};
