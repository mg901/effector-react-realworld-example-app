import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../ui';
import { types } from '../feed';

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
  favoritesCount,
  onClick,
}) => (
  <article>
    <header>
      <Link to={`/@${author.username}`}>
        <img src={author.image} alt={author.username} />
      </Link>

      <div>
        <Link to={`/@${author.username}`}>{author.username}</Link>
        <span>{new Date(createdAt).toDateString()}</span>
      </div>
      <Button onClick={onClick}>like {favoritesCount}</Button>
    </header>
    <Link to={slug}>
      <h1>{title}</h1>
      <p>{description}</p>
      <span>Read more...</span>
    </Link>
    <ul>
      {tagList.map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  </article>
);
