import React from 'react';
import { useList } from 'effector-react';
import { model } from '../model';
import { Tag } from './tag';

export const TagList: React.FC = () => (
  <ul className="tag-list">
    {useList(model.$tags, (tag) => (
      <Tag text={tag} onClick={() => model.tagDeleted(tag)} />
    ))}
  </ul>
);
