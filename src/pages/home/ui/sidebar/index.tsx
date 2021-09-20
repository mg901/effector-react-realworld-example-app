import { useGate } from 'effector-react';
import { Spinner } from 'shared/ui';
import * as home from '../../model';
import { TagList } from '../tag-list';
import './index.css';

export const Sidebar: React.FC = () => {
  useGate(home.model.Gate);
  const loading = home.selectors.useLoadTags();

  return (
    <aside className="sidebar">
      <p>Popular Tags</p>
      <TagList />
      <Spinner loading={loading} />
    </aside>
  );
};
