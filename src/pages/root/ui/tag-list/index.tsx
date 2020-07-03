import React from 'react';
import { useList } from 'effector-react';
import { Link } from 'react-router-dom';
import { $tags } from '../../model';
import { Tag } from '../../../../ui';

export const TagList: React.FC = () => (
  <ul>
    {useList($tags, (tag) => (
      <Tag as={Link} to={`/feed-by-tag/?name=${tag}`}>
        {tag}
      </Tag>
    ))}
  </ul>
);
