import React from 'react';
import { useGate, useList, useStore } from 'effector-react';
import { Link } from 'react-router-dom';
import { PageGate, $$articles } from '../model';
import '../init';

export const FeedByTagPage: React.FC = () => {
  useGate(PageGate);

  // const currentPage = useStore($currentPage);
  // const total = useStore($$total);

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
    </div>
  );
};
