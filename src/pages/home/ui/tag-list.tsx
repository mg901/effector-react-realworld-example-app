/* eslint-disable react/destructuring-assignment */

import { Link, useRouteMatch } from 'react-router-dom';
import { useList } from 'effector-react';
import { URLS } from '@/shared/router';
import { Spinner } from '@/shared/ui';
import * as home from '../model';

export const TagList = () => {
  const { url } = useRouteMatch<{ url: string }>();
  const loading = home.selectors.useLoadTags();

  return (
    <>
      {useList(home.$tags, {
        getKey: (tag) => tag,
        fn: (tag) => (
          <Link
            className="tag-default tag-pill"
            to={`${url}${URLS.FEED_BY_TAG}?tag=${tag}`}
            type="button"
            onClick={() => home.tagSelected(tag)}
          >
            {tag.toLowerCase()}
          </Link>
        ),
      })}

      <Spinner show={loading} />
    </>
  );
};
