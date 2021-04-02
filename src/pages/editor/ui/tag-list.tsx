import { useList } from 'effector-react';
import { TagList as List } from 'ui';
import * as model from '../model';
import { Tag } from './tag';

export const TagList: React.FC = () => (
  <List>
    {useList(model.$tagList, {
      getKey: (tag) => tag,
      fn: (tag) => <Tag onClick={() => model.tagDeleted(tag)}>{tag}</Tag>,
    })}
  </List>
);
