import * as user from 'entities/user';
import * as router from 'shared/library/router';
import { NavItem, NavLink } from 'shared/ui';

export const LoginLinks: React.FC = () => {
  const { username, image } = user.selectors.useUser();

  return (
    <>
      <NavItem>
        <NavLink to={router.URLS.ROOT}>Home</NavLink>
      </NavItem>

      <NavItem>
        <NavLink to={router.URLS.EDITOR}>
          <i className="ion-compose" />
          &nbsp;New Post
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink to={router.URLS.SETTINGS}>
          <i className="ion-gear-a" />
          &nbsp;Settings
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink to={`/@${username}`}>
          <img alt={username} className="user-pic" src={image} />
          {username}
        </NavLink>
      </NavItem>
    </>
  );
};
