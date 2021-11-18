import { useRouteMatch, NavLink } from 'shared/library/router';
import { NavItem } from 'shared/ui';

type RouteMatch = {
  url: string;
};

export const Tabs: React.FC = ({ children }) => {
  const { url } = useRouteMatch<RouteMatch>();

  return (
    <div className="col-xs-12 col-md-10 offset-md-1">
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
      {children}
    </div>
  );
};
