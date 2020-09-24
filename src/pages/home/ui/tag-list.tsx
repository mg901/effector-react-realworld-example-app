import React from 'react';
import { Link } from 'react-router-dom';
import { useList } from 'effector-react';
import { Paths } from 'library/router';
import { model } from '../../main/model';

export const TagList: React.FC = () => (
  <ul className="tag-list">
    {useList(model.$validTags, (tag) => (
      <Link
        to={`${Paths.FEED_BY_TAG}?tag=${tag}`}
        className="tag-default tag-pill">
        {tag.toLowerCase()}
      </Link>
    ))}
  </ul>
);
