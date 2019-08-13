import React from 'react';
import { useList } from 'effector-react';
import { tags } from './model';
import { Button } from '../components/button';
import { getPostsByTag } from '../posts/model';

export const Tags = () => (
  <ul className="tag-list">
    {useList(tags, (tag) => {
      return (
        <li>
          <Button
            className="tag-default tag-pill"
            onClick={() => getPostsByTag(tag)}>
            {tag}
          </Button>
        </li>
      );
    })}
  </ul>
);
