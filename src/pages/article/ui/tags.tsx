import { TagList, Tag } from 'shared/ui';
import { selectors } from '../model';

export const Tags: React.FC = () => {
  const { tagList } = selectors.useArticle();

  return (
    <TagList>
      {tagList.map((tag) => (
        <Tag key={tag}>{tag.toLowerCase()}</Tag>
      ))}
    </TagList>
  );
};
