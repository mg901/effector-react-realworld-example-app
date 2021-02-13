import { NavItem, NavLink } from 'ui';

type Props = Readonly<{
  path: string;
}>;

export const Tabs: React.FC<Props> = ({ path, children }) => (
  <div className="col-xs-12 col-md-10 offset-md-1">
    <ul className="nav nav-pills outline-active articles-toggle">
      <NavItem>
        <NavLink to={`${path}`}>My Articles</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to={`${path}/favorites`}>Favorited Articles</NavLink>
      </NavItem>
    </ul>

    {children}
  </div>
);
