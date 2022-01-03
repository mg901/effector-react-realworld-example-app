import { Link } from 'react-router-dom';
import { useList } from 'effector-react';
import { ROUTES } from '@/shared/router';
import { Spinner } from '@/shared/ui';
import * as home from '../model';

export const TagList = () => {
  const loading = home.selectors.useLoadTags();

  return (
    <>
      {useList(home.$tags, {
        getKey: (tag) => tag,
        fn: (tag) => {
          const handleClick = () => {
            home.tagSelected(tag);
          };

          return (
            <Link
              className="tag-default tag-pill"
              to={`${ROUTES.feedByTag}?tag=${tag}`}
              type="button"
              onClick={handleClick}
            >
              {tag.toLowerCase()}
            </Link>
          );
        },
      })}

      <Spinner show={loading} />
    </>
  );
};
