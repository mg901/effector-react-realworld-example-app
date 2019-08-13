import React from 'react';
import { useList } from 'effector-react';
import { Button } from '../components';
import { tags, removeTag } from './model';

export const TagList = () => (
  <div className="tag-list">
    {useList(tags, (tag) => (
      <Button
        className="tag-default tag-pill"
        key={tag}
        onClick={() => removeTag(tag)}>
        <i className="ion-close-round" />
        {tag}
      </Button>
    ))}
  </div>
);
