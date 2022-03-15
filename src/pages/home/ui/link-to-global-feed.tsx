import { NavLink } from 'react-router-dom';
import { ROUTES } from '@/shared/router';
import { NavItem } from '@/shared/ui';
import * as session from '@/entities/session';

export const LinkToGlobalFeed = () => {
  const isAuth = session.selectors.useIsAuthorized();

  return isAuth ? (
    <NavItem>
      <NavLink exact className="nav-link" to={ROUTES.globalFeed}>
        Global Feed
      </NavLink>
    </NavItem>
  ) : null;
};
