import { NavLink } from 'react-router-dom';
import * as visitor from '@/entities/visitor';
import { ROUTES } from '@/shared/router';
import { NavItem } from '@/shared/ui';

export const LinkToGlobalFeed = () => {
  const isAuth = visitor.selectors.useIsAuthorized();

  return isAuth ? (
    <NavItem>
      <NavLink exact className="nav-link" to={ROUTES.globalFeed}>
        Global Feed
      </NavLink>
    </NavItem>
  ) : null;
};
