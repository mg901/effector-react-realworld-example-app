import { NavLink } from 'react-router-dom';
import * as session from '@/entities/session';

type Props = {
  children: React.ReactNode;
};

export const LinkToVisitor = ({ children }: Props) => {
  const username = session.selectors.useUsername();

  return (
    <NavLink exact className="nav-link" to={`/@${username}`}>
      {children}
      {username}
    </NavLink>
  );
};
