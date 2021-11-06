import * as user from 'entities/user';
import { NavLink } from 'shared/library/router';

export const LinkWithUserPic: React.FC = () => {
  const { username, image } = user.selectors.useUser();

  return (
    <NavLink exact className="nav-link" to={`/@${username}`}>
      <img alt={username} className="user-pic" src={image} />
      {username}
    </NavLink>
  );
};
