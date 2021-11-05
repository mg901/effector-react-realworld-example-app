import { URLS, NavLink } from 'shared/library/router';
import { NavItem } from 'shared/ui';
import { LinkWithUserPic } from './link-with-user-pic';

export function LoginLinks(): JSX.Element {
  return (
    <>
      <NavItem>
        <NavLink exact className="nav-link" to={URLS.ROOT}>
          Home
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink exact className="nav-link" to={URLS.EDITOR}>
          <i className="ion-compose" />
          &nbsp;New Post
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink exact className="nav-link" to={URLS.SETTINGS}>
          <i className="ion-gear-a" />
          &nbsp;Settings
        </NavLink>
      </NavItem>

      <NavItem>
        <LinkWithUserPic />
      </NavItem>
    </>
  );
}
