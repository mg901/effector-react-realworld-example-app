import { useStore } from 'effector-react';
import { TagList, Tag } from 'ui';
import * as model from '../model';

export const Tags: React.FC = () => {
  const { tagList } = useStore(model.$article);

  return (
    <TagList>
      {tagList.map((tag) => (
        <Tag key={tag}>{tag.toLowerCase()}</Tag>
      ))}
    </TagList>
  );
};
