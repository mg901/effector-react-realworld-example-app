import { Link } from 'react-router-dom';
import { ToggleLike } from 'features/toggle-like-on-article';
import { TagList, Tag, ButtonProps } from 'shared/ui';
import * as types from '../model/types';
import { ArticleMeta } from './article-meta';

type Props = Readonly<{
  data: types.Article;
  onClick: ButtonProps['onClick'];
}>;

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
        <ToggleLike active={favorited} onClick={onClick}>
          {favoritesCount}
        </ToggleLike>
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
