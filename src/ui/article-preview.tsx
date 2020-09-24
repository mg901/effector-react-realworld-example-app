import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { Button, ArticleMeta, TagList, Tag } from 'ui';
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
      <ArticleMeta author={author} createdAt={createdAt}>
        <div className="pull-xs-right">
          <Button onClick={onClick} className={`btn-sm ${classNames}`}>
            <i className="ion-heart" /> {favoritesCount}
          </Button>
        </div>
      </ArticleMeta>
      <Link to={`/article/${slug}`} className="preview-link">
        <h1>{title}</h1>
        <p>{description}</p>
        <span>Read more...</span>
        <TagList>
          {tagList.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </TagList>
      </Link>
    </article>
  );
};
