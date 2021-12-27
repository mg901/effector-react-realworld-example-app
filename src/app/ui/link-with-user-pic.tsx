import { NavLink } from 'react-router-dom';
import * as visitor from 'entities/visitor';

export const LinkWithUserPic = () => {
  const { username, image } = visitor.selectors.useVisitor();

  return (
    <NavLink exact className="nav-link" to={`/@${username}`}>
      <img alt={username} className="user-pic" src={image} />
      {username}
    </NavLink>
  );
};
