import React from 'react';
import { useList } from 'effector-react';
import { Link } from 'react-router-dom';
import { Paths } from '../../../../router';
import { $tags } from '../../../root/model';
import { Tag } from '../../../../ui';

export const TagList: React.FC = () => (
  <ul>
    {useList($tags, (tag) => (
      <Link to={`${Paths.FEED_BY_TAG}?name=${tag}`}>
        <Tag>{tag}</Tag>
      </Link>
    ))}
  </ul>
);
