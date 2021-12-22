import { Link } from 'react-router-dom';
import * as visitor from 'entities/visitor';

export const LogoutMessage: React.FC = () => {
  const isAuth = visitor.selectors.useIsAuthorized();

  return isAuth ? null : (
    <p>
      <Link to="/login">Sign in</Link>
      &nbsp;or&nbsp;
      <Link to="/register">sign up</Link>
      &nbsp;to add comments on this article.
    </p>
  );
};
