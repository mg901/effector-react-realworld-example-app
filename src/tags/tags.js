import React from 'react';
import { useList } from 'effector-react';
import { $tags, selectTag } from './model';
import { Button } from '../components';

export const Tags = () => (
  <ul className="tag-list">
    {useList($tags, (tag) => {
      return (
        <li>
          <Button
            className="tag-default tag-pill"
            onClick={() => selectTag(tag)}>
            {tag}
          </Button>
        </li>
      );
    })}
  </ul>
);
