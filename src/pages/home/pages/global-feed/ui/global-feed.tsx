import React from 'react';
import { RouteConfigComponentProps } from 'react-router-config';
import { useGate, useList, useStore } from 'effector-react';
import { ArticlePreview, List, Loader } from 'ui';
import { model } from '../model';
import { Pagination } from './pagination';

import '../model/init';

type Props = Readonly<RouteConfigComponentProps>;

export const GlobalFeedPage: React.FC<Props> = ({ match: { path } }) => {
  useGate(model.PageGate);
  const loading = useStore(model.$isFirstBoot);

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
      <Pagination path={path} />
      <Loader loading={loading} />
    </>
  );
};
