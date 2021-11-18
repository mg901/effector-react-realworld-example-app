/* eslint-disable react/destructuring-assignment */
import { memo } from 'react';
import { useList } from 'effector-react';
import { Link, useRouteMatch, URLS } from 'shared/library/router';
import { TagList as List, Spinner } from 'shared/ui';
import * as home from '../model';

export const TagList: React.FC = memo(() => {
  const { url } = useRouteMatch<{ url: string }>();
  const loading = home.selectors.useLoadTags();

  return (
    <>
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
      <Spinner show={loading} />
    </>
  );
});
