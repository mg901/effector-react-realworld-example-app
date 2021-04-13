/* eslint-disable react/destructuring-assignment */
import { Link } from 'react-router-dom';
import { useList } from 'effector-react';
import { Paths } from 'router';
import { TagList as List } from 'ui';
import { $tags } from '../model';

export const TagList: React.FC = () => (
  <List>
    {useList($tags, {
      getKey: (tag) => tag,
      fn: (tag) => (
        <Link
          className="tag-default tag-pill"
          to={`${Paths.FEED_BY_TAG}?tag=${tag}`}>
          {tag.toLowerCase()}
        </Link>
      ),
    })}
  </List>
);
