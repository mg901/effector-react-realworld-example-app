import { TagList, Tag } from 'shared/ui';
import * as article from '../model';

export const Tags: React.FC = () => {
  const { tagList } = article.selectors.useArticle();

  return (
    <TagList>
      {tagList.map((tag) => (
        <Tag key={tag}>{tag.toLowerCase()}</Tag>
      ))}
    </TagList>
  );
};
