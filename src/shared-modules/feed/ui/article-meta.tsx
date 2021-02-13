import { Link } from 'react-router-dom';
import * as types from '../model/types';

type Props = Readonly<Pick<types.Article, 'author' | 'createdAt'>>;

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
