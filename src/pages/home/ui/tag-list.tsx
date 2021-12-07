/* eslint-disable react/destructuring-assignment */

import { useList } from 'effector-react';
import { Link, useRouteMatch, URLS } from 'shared/library/router';
import { Spinner } from 'shared/ui';
import * as home from '../model';

export const TagList: React.FC = () => {
  const { url } = useRouteMatch<{ url: string }>();
  const loading = home.selectors.useLoadTags();

  return (
    <>
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

      <Spinner show={loading} />
    </>
  );
};
