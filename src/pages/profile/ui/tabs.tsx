import { useRouteMatch, NavLink } from 'react-router-dom';
import { NavItem } from '@/shared/ui';

type RouteMatch = {
  url: string;
};

type Props = Readonly<{
  children: React.ReactNode;
}>;

export const Tabs = ({ children }: Props) => {
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
