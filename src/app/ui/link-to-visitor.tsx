import { NavLink } from 'react-router-dom';
import * as visitor from '@/entities/visitor';

type Props = {
  children: React.ReactNode;
};

export const LinkToVisitor = ({ children }: Props) => {
  const username = visitor.selectors.useUserName();

  return (
    <NavLink exact className="nav-link" to={`/@${username}`}>
      {children}
      {username}
    </NavLink>
  );
};
