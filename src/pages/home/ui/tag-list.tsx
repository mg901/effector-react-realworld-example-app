import React from 'react';
import { Link } from 'react-router-dom';
import { useList } from 'effector-react';
import { Paths } from '../../../library/router';
import { Tag } from '../../../ui';
import { $tags } from '../../root/model';

export const TagList: React.FC = () => (
  <ul>
    {useList($tags, (tag) => (
      <Link to={`${Paths.FEED_BY_TAG}?tag=${tag}`}>
        <Tag>{tag}</Tag>
      </Link>
    ))}
  </ul>
);
