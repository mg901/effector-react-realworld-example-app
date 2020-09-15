import React from 'react';
import { RouteConfigComponentProps } from 'react-router-config';
import { Link } from 'react-router-dom';
import { useGate, useList } from 'effector-react';
import { model } from '../model';
import { Pagination } from './pagination';
import '../model/init';

type Props = Readonly<RouteConfigComponentProps>;

export const YourFeed: React.FC<Props> = ({ match: { path } }) => {
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
      <Pagination path={path} />
    </div>
  );
};
