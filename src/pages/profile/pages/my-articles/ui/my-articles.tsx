import React from 'react';
import { RouteConfigComponentProps } from 'react-router-config';
import { Link } from 'react-router-dom';
import { useGate, useList } from 'effector-react';
import * as model from '../model';
import { Pagination } from './pagination';
import '../init';

type Props = Readonly<RouteConfigComponentProps>;

export const MyArticles: React.FC<Props> = ({ match: { url } }) => {
  useGate(model.PageGate);

  return (
    <div>
      <ul>
        {useList(model.$articles, ({ author }) => (
          <li>
            <img alt={author.username} />
            <Link to={`/@${author.username}`}>{author.username}</Link>
          </li>
        ))}
      </ul>
      <Pagination path={url} />
    </div>
  );
};
