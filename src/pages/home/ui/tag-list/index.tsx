import React from 'react';
import { useList } from 'effector-react';
import { Link } from 'react-router-dom';
import { Links } from '../../../../router';
import { $tags } from '../../../root/model';
import { Tag } from '../../../../ui';

export const TagList: React.FC = () => (
  <ul>
    {useList($tags, (tag) => (
      <Tag as={Link} to={`${Links.FEED_BY_TAG}?name=${tag}`}>
        {tag}
      </Tag>
    ))}
  </ul>
);
