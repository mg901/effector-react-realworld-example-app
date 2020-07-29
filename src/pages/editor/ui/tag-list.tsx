import React from 'react';
import { useList } from 'effector-react';
import { $$tags, tagDeleted } from '../model';

export const TagList: React.FC = () => (
  <ul>
    {useList($$tags, (tag) => (
      <span>
        <span>{tag}</span>
        <button type="button" onClick={() => tagDeleted(tag)}>
          x
        </button>
      </span>
    ))}
  </ul>
);
