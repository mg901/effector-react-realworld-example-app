import React from 'react';
import { useList } from 'effector-react';
import { Button } from '../../ui';
import { $tags } from './model';
import { tagSelected } from './events';
import './index.css';

export const Tags: React.FC = () => (
  <ul className="tag-list">
    {useList($tags, (tag) => (
      <li>
        <Button
          className="tag"
          onClick={(): void => {
            tagSelected(tag);
          }}>
          {tag}
        </Button>
      </li>
    ))}
  </ul>
);
