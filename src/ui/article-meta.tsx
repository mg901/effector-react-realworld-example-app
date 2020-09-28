import React from 'react';
import { Link } from 'react-router-dom';
import { types } from 'features/feed';

type Props = Readonly<{
  author: types.Article['author'];
  createdAt: types.Article['createdAt'];
}>;

export const ArticleMeta: React.FC<Props> = ({
  author,
  createdAt,
  children,
}) => (
  <div className="article-meta">
    <Link to={`/@${author.username}`}>
      <img alt={author.username} src={author.image} />
    </Link>

    <div className="info">
      <Link className="author" to={`/@${author.username}`}>
        {author.username}
      </Link>
      <span className="date">{new Date(createdAt).toDateString()}</span>
    </div>
    {children}
  </div>
);
