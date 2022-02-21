import { NavLink, useRouteMatch } from 'react-router-dom';
import { NavItem } from '@/shared/ui';

export const Tabs = () => {
  const { url } = useRouteMatch<{ url: string }>();

  return (
    <ul className="nav nav-pills outline-active articles-toggle">
      <NavItem>
        <NavLink exact className="nav-link" to={`${url}`}>
          My Articles
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink exact className="nav-link" to={`${url}/favorites`}>
          Favorited Articles
        </NavLink>
      </NavItem>
    </ul>
  );
};
