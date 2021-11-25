import { Link } from 'shared/library/router';
import { TagList, Tag, ButtonProps } from 'shared/ui';

import { types } from '../model';
import { ArticleMeta } from './article-meta';
import { ButtonFavorite } from './button-favorite';

type Props = {
  article: types.Article;
  onClick: ButtonProps['onClick'];
};

export const ArticlePreview: React.FC<Props> = ({
  article: {
    author,
    createdAt,
    slug,
    title,
    description,
    tagList,
    favorited,
    favoritesCount,
  },
  onClick,
}) => (
  <article className="article-preview">
    <ArticleMeta author={author} createdAt={createdAt}>
      <div className="pull-xs-right">
        <ButtonFavorite active={favorited} onClick={onClick}>
          {favoritesCount}
        </ButtonFavorite>
      </div>
    </ArticleMeta>
    <Link className="preview-link" to={`/article/${slug}`}>
      <h1>{title}</h1>
      <p>{description}</p>
      <span>Read more...</span>
      <TagList>
        {tagList.map((tag) => (
          <Tag key={tag}>{tag.toLowerCase()}</Tag>
        ))}
      </TagList>
    </Link>
  </article>
);
