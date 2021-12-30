import { Link } from 'react-router-dom';
import * as visitor from '@/entities/visitor';
import { ROUTES } from '@/shared/router';

export const LogoutMessage = () => {
  const isAuth = visitor.selectors.useIsAuthorized();

  return isAuth ? null : (
    <p>
      <Link to={ROUTES.LOGIN}>Sign in</Link>
      &nbsp;or&nbsp;
      <Link to={ROUTES.REGISTRATION}>sign up</Link>
      &nbsp;to add comments on this article.
    </p>
  );
};
