import React from 'react';
import { useGate, useStore, useList } from 'effector-react';
import { Link } from 'react-router-dom';
import { Pagination } from '../../../ui';
import {
  PageGate,
  $$articles,
  $currentPage,
  $$total,
  currentPageSetted,
} from '../model';
import '../init';

export const YourFeed: React.FC = () => {
  useGate(PageGate);
  const currentPage = useStore($currentPage);
  const total = useStore($$total);

  return (
    <div>
      <ul>
        {useList($$articles, ({ author }) => (
          <li>
            <img alt={author.username} />
            <Link to={`/@${author.username}`}>{author.username}</Link>
          </li>
        ))}
      </ul>
      <Pagination
        currentPage={currentPage as number}
        total={total}
        onChange={currentPageSetted}
        limit={10}
      />
    </div>
  );
};
