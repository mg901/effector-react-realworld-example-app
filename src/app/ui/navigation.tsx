import * as session from '@/entities/session';
import { LoginLinks } from './login-links';
import { LogoutLinks } from './logout-links';

export const Navigation = () => {
  const isAuth = session.selectors.useIsAuthorized();

  return isAuth ? <LoginLinks /> : <LogoutLinks />;
};
