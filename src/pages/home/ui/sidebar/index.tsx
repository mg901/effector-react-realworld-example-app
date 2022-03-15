import { TagsWrapper } from '@/shared/ui';
import { TagList } from '../tag-list';
import styles from './index.module.css';

export const Sidebar = () => {
  return (
    <aside className={`${styles.sidebar} sidebar`}>
      <p>Popular Tags</p>
      <TagsWrapper>
        <TagList />
      </TagsWrapper>
    </aside>
  );
};
