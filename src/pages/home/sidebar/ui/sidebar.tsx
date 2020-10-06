import React from 'react';
import { useGate } from 'effector-react';
import { Gate } from '../model';
import { TagList } from './tag-list';
import '../model/init';

export const Sidebar: React.FC = () => {
  useGate(Gate);

  return (
    <aside className="sidebar">
      <p>Popular Tags</p>
      <TagList />
    </aside>
  );
};
