import React from 'react';
import { useGate, useList } from 'effector-react';
import { Link } from 'react-router-dom';
import { RouteConfigComponentProps } from 'react-router-config';
import { Pagination } from './pagination';
import { PageGate, $articles } from '../model';

type Props = Readonly<RouteConfigComponentProps>;

export const FeedByTag: React.FC<Props> = ({ match: { path } }) => {
  useGate(PageGate);

  return (
    <div>
      <ul>
        {useList($articles, ({ author }) => (
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
