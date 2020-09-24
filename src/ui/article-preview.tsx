import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { Button } from 'ui';
import { types } from '../features/feed';

type Props = types.Article &
  Readonly<{
    onClick: () => void;
  }>;

export const ArticlePreview: React.FC<Props> = ({
  author,
  createdAt,
  slug,
  title,
  description,
  tagList,
  favorited,
  favoritesCount,
  onClick,
}) => {
  const classNames = clsx({
    'btn-primary': favorited,
    'btn-outline-primary': !favorited,
  });

  return (
    <article className="article-preview">
      <header className="article-meta">
        <Link to={`/@${author.username}`}>
          <img src={author.image} alt={author.username} />
        </Link>

        <div className="info">
          <Link to={`/@${author.username}`} className="author">
            {author.username}
          </Link>
          <span className="date">{new Date(createdAt).toDateString()}</span>
        </div>
        <div className="pull-xs-right">
          <Button onClick={onClick} className={`btn-sm ${classNames}`}>
            <i className="ion-heart" /> {favoritesCount}
          </Button>
        </div>
      </header>
      <Link to={`/article/${slug}`} className="preview-link">
        <h1>{title}</h1>
        <p>{description}</p>
        <span>Read more...</span>
        <ul className="tag-list">
          {tagList.map((tag) => (
            <li key={tag} className="tag-default tag-pill tag-outline">
              {tag}
            </li>
          ))}
        </ul>
      </Link>
    </article>
  );
};
