import { Link } from 'react-router-dom';
import * as visitor from '@/entities/visitor';
import { ROUTES } from '@/shared/router';

export const LogoutMessage = () => {
  const isAuth = visitor.selectors.useIsAuthorized();

  return isAuth ? null : (
    <p>
      <Link to={ROUTES.login}>Sign in</Link>
      &nbsp;or&nbsp;
      <Link to={ROUTES.registration}>sign up</Link>
      &nbsp;to add comments on this article.
    </p>
  );
};
