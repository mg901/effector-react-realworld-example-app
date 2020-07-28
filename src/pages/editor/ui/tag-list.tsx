import React from 'react';
import { useList } from 'effector-react';
import { Tag } from '../../../ui';
import { $$tags, tagDeleted } from '../model';

export const TagList: React.FC = () => (
  <ul>
    {useList($$tags, (tag) => (
      <Tag onClick={() => tagDeleted(tag)}>{tag}</Tag>
    ))}
  </ul>
);
