import { Link } from 'react-router-dom';
import { TagList, Tag, ButtonProps } from 'ui';
import * as types from '../model/types';
import { ArticleMeta } from './article-meta';
import { ButtonFavorite } from './button-favorite';

type Props = {
  data: types.Article;
  onClick: ButtonProps['onClick'];
};

export const ArticlePreview: React.FC<Props> = ({
  data: {
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
