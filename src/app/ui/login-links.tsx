import * as user from 'shared/entities/user';
import { NavItem, NavLink } from 'shared/ui';
import { Urls } from 'router';

export const LoginLinks: React.FC = () => {
  const { username, image } = user.selectors.useUser();

  return (
    <>
      <NavItem>
        <NavLink to={Urls.ROOT}>Home</NavLink>
      </NavItem>

      <NavItem>
        <NavLink to={Urls.EDITOR}>
          <i className="ion-compose" />
          &nbsp;New Post
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink to={Urls.SETTINGS}>
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
