import { useGate } from 'effector-react';
import * as home from '../../model';
import './index.css';

export const Aside: React.FC = ({ children }) => {
  useGate(home.model.Gate);

  return (
    <aside className="sidebar">
      <p>Popular Tags</p>
      {children}
    </aside>
  );
};
