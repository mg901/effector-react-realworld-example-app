import React from 'react';
import { useGate, useStore, useList } from 'effector-react';
import { Link } from 'react-router-dom';
import { RouteConfigComponentProps } from 'react-router-config';
import { Pagination } from '../../../ui';
import { itemRender } from '../../../library';
import { PageGate, $articles, $totalPages } from '../model/your-feed.model';
import '../model/init';

type Props = Readonly<RouteConfigComponentProps>;

export const YourFeed: React.FC<Props> = ({ match: { path } }) => {
  useGate(PageGate);
  const total = useStore($totalPages);

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
      <Pagination itemRender={itemRender(path)} total={total} />
    </div>
  );
};
