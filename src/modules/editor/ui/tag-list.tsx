import React from 'react';
import { useList } from 'effector-react';
import { Tag } from './tag';
import { $tags } from '../model';
import { tagRemoved } from '../events';

export const TagList: React.FC = () => (
  <ul className="tag-list">
    {useList($tags, (tag) => (
      <Tag
        text={tag}
        onClick={(): void => {
          tagRemoved(tag);
        }}
      />
    ))}
  </ul>
);
