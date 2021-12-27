import { memo } from 'react';
import { Link } from 'react-router-dom';
import { types } from '../model';

type Props = Readonly<
  Pick<types.Article, 'author' | 'createdAt'> & {
    children: React.ReactNode;
  }
>;

export const ArticleMeta = memo(({ author, createdAt, children }: Props) => (
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
));

ArticleMeta.displayName = 'ArticleMeta';
