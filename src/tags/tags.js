import React from 'react';
import { useList } from 'effector-react';
import { tags } from './model';
import { Button } from '../components';
import { getFeedByTag } from '../feed/model.events';

export const Tags = () => (
  <ul className="tag-list">
    {useList(tags, (tag) => {
      return (
        <li>
          <Button
            className="tag-default tag-pill"
            onClick={() => getFeedByTag(tag)}>
            {tag}
          </Button>
        </li>
      );
    })}
  </ul>
);
