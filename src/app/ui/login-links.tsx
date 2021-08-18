import { useStore } from 'effector-react';
import * as user from 'entities/user';
import { URLS } from 'shared/library/router';
import { NavItem, NavLink } from 'shared/ui';

export const LoginLinks: React.FC = () => {
  const { username, image } = useStore(user.model.$user);

  return (
    <>
      <NavItem>
        <NavLink to={URLS.ROOT}>Home</NavLink>
      </NavItem>

      <NavItem>
        <NavLink to={URLS.EDITOR}>
          <i className="ion-compose" />
          &nbsp;New Post
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink to={URLS.SETTINGS}>
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
