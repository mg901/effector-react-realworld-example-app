/* eslint-disable react/destructuring-assignment */
import { Link, useRouteMatch } from 'react-router-dom';
import { useList } from 'effector-react';
import { URLS } from 'shared/library/router';
import { TagList as List } from 'shared/ui';
import * as home from '../model';

export const TagList: React.FC = () => {
  const { url } = useRouteMatch<{ url: string }>();

  return (
    <List>
      {useList(home.model.$tags, {
        getKey: (tag) => tag,
        fn: (tag) => (
          <Link
            className="tag-default tag-pill"
            to={`${url}${URLS.FEED_BY_TAG}?tag=${tag}`}
            type="button"
            onClick={() => home.model.tagSelected(tag)}
          >
            {tag.toLowerCase()}
          </Link>
        ),
      })}
    </List>
  );
};
