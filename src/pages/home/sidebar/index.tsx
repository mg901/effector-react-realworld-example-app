import { useGate } from 'effector-react';
import { Gate } from './model';
import { TagList } from './ui';

export const Sidebar: React.FC = () => {
  useGate(Gate);

  return (
    <aside className="sidebar">
      <p>Popular Tags</p>
      <TagList />
    </aside>
  );
};
