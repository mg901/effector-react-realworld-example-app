import React from 'react';
import { Link } from 'react-router-dom';
import { useList } from 'effector-react';
import { Paths } from 'library/router';
import { TagList as List } from 'ui';
import { model } from '../../main/model';

export const TagList: React.FC = () => (
  <List>
    {useList(model.$validTags, (tag) => (
      <Link
        to={`${Paths.FEED_BY_TAG}?tag=${tag}`}
        className="tag-default tag-pill">
        {tag}
      </Link>
    ))}
  </List>
);
