import React from 'react';
import { RouteConfigComponentProps } from 'react-router-config';
import { Link } from 'react-router-dom';
import { useGate, useList, useStore } from 'effector-react';
import { ArticlesPreview } from '../../../../../ui';
import { model } from '../model';
import { Pagination } from './pagination';
import '../model/init';

type Props = Readonly<RouteConfigComponentProps>;

export const GlobalFeed: React.FC<Props> = ({ match: { path } }) => {
  useGate(model.PageGate);
  const isEmpty = useStore(model.$isEmptyArticles);

  return (
    <div>
      {isEmpty && <ArticlesPreview />}
      <ul>
        {useList(model.$articles, ({ author }) => (
          <li>
            <img alt={author.username} />
            <Link to={`/@${author.username}`}>{author.username}</Link>
          </li>
        ))}
      </ul>
      <Pagination path={path} />
    </div>
  );
};
