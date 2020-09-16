import React from 'react';
import { useList } from 'effector-react';
import { model } from '../model';

export const TagList: React.FC = () => (
  <ul>
    {useList(model.$tags, (tag) => (
      <span>
        <span>{tag.toLowerCase()}</span>
        <button type="button" onClick={() => model.tagDeleted(tag)}>
          x
        </button>
      </span>
    ))}
  </ul>
);
