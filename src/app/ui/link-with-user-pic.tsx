import * as visitor from 'entities/visitor';
import { NavLink } from 'shared/library/router';

export const LinkWithUserPic: React.FC = () => {
  const { username, image } = visitor.selectors.useVisitor();

  return (
    <NavLink exact className="nav-link" to={`/@${username}`}>
      <img alt={username} className="user-pic" src={image} />
      {username}
    </NavLink>
  );
};
