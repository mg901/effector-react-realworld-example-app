import { NavLink } from 'react-router-dom';
import { Avatar } from '@/entities/visitor';
import { ROUTES } from '@/shared/router';
import { NavItem } from '@/shared/ui';
import { LinkToVisitor } from './link-to-visitor';

export const LoginLinks = () => {
  return (
    <>
      <NavItem>
        <NavLink exact className="nav-link" to={ROUTES.root}>
          Home
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink exact className="nav-link" to={ROUTES.editor.root}>
          <i className="ion-compose" />
          &nbsp;New Post
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink exact className="nav-link" to={ROUTES.settings}>
          <i className="ion-gear-a" />
          &nbsp;Settings
        </NavLink>
      </NavItem>

      <NavItem>
        <LinkToVisitor>
          <Avatar className="user-pic" />
        </LinkToVisitor>
      </NavItem>
    </>
  );
};
