import { URLS, NavLink } from 'shared/library/router';
import { NavItem } from 'shared/ui';
import { useUser } from '../../pages/settings/model/selectors';

export const LoginLinks: React.FC = () => {
  const { username, image } = useUser();

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
        <NavLink exact className="nav-link" to={`/@${username}`}>
          <img alt={username} className="user-pic" src={image} />
          {username}
        </NavLink>
      </NavItem>
    </>
  );
};
