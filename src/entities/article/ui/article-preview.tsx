import { memo } from 'react';
import { Link } from 'react-router-dom';
import { TagsWrapper, Tag } from '@/shared/ui';

import { types } from '../model';
import { ArticleMeta } from './article-meta';
import { ButtonFavorite } from './button-favorite';

type Props = Omit<types.Article, 'body' | 'updatedAt'> &
  Readonly<{
    onFavoriteToggle: (payload: types.SelectedArticle) => void;
  }>;

export const ArticlePreview = memo(
  ({
    author,
    createdAt,
    slug,
    title,
    description,
    tagList,
    favorited,
    favoritesCount,
    onFavoriteToggle,
  }: Props) => {
    return (
      <article className="article-preview">
        <ArticleMeta author={author} createdAt={createdAt}>
          <div className="pull-xs-right">
            <ButtonFavorite
              favorited={favorited}
              favoritesCount={favoritesCount}
              slug={slug}
              onClick={onFavoriteToggle}
            >
              {favoritesCount}
            </ButtonFavorite>
          </div>
        </ArticleMeta>
        <Link className="preview-link" to={`/article/${slug}`}>
          <h1>{title}</h1>
          <p>{description}</p>
          <span>Read more...</span>
          <TagsWrapper>
            {tagList.map((tag) => (
              <Tag key={tag}>{tag.toLowerCase()}</Tag>
            ))}
          </TagsWrapper>
        </Link>
      </article>
    );
  },
);

ArticlePreview.displayName = 'Article Preview';
