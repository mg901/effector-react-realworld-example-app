import { NavLink } from 'react-router-dom';
import * as visitor from '@/entities/visitor';
import { ROUTES } from '@/shared/router';
import { NavItem } from '@/shared/ui';

export const LinkToYourFeed = () => {
  const isAuth = visitor.selectors.useIsAuthorized();

  return isAuth ? (
    <NavItem>
      <NavLink exact className="nav-link" to={ROUTES.yourFeed}>
        Your Feed
      </NavLink>
    </NavItem>
  ) : null;
};
