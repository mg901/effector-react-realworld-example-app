import { TagsWrapper, Tag } from '@/shared/ui';
import * as currentArticle from '../model';

export const Tags = () => {
  const { tagList } = currentArticle.selectors.useCurrentArticle();

  return (
    <TagsWrapper>
      {tagList.map((tag) => (
        <Tag key={tag}>{tag.toLowerCase()}</Tag>
      ))}
    </TagsWrapper>
  );
};
