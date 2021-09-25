import { useEffect } from 'react';
import { Spinner } from 'shared/ui';
import * as home from '../../model';
import { TagList } from '../tag-list';
import './index.css';

export const Sidebar: React.FC = () => {
  const loading = home.selectors.useLoadTags();

  useEffect(() => {
    home.model.getTagsFx();
  }, []);

  return (
    <aside className="sidebar">
      <p>Popular Tags</p>
      <TagList />
      <Spinner loading={loading} />
    </aside>
  );
};
