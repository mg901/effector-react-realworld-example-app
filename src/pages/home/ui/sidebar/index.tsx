import { useGate } from 'effector-react';
import { TagsWrapper } from '@/shared/ui';
import * as home from '../../model';
import { TagList } from '../tag-list';
import styles from './index.module.css';

export const Sidebar = () => {
  useGate(home.Gate);

  return (
    <aside className={`${styles.sidebar} sidebar`}>
      <p>Popular Tags</p>
      <TagsWrapper>
        <TagList />
      </TagsWrapper>
    </aside>
  );
};
