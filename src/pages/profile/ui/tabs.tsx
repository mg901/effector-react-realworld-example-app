import { useRouteMatch } from 'react-router-dom';
import { NavItem, NavLink } from 'ui';

type RouteMatch = {
  url: string;
};

export const Tabs: React.FC = ({ children }) => {
  const { url } = useRouteMatch<RouteMatch>();

  return (
    <div className="col-xs-12 col-md-10 offset-md-1">
      <ul className="nav nav-pills outline-active articles-toggle">
        <NavItem>
          <NavLink to={`${url}`}>My Articles</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to={`${url}/favorites`}>Favorited Articles</NavLink>
        </NavItem>
      </ul>
      {children}
    </div>
  );
};
