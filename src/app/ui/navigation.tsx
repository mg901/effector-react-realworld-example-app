import * as visitor from '@/entities/visitor';
import { LoginLinks } from './login-links';
import { LogoutLinks } from './logout-links';

export const Navigation = () => {
  const isAuth = visitor.selectors.useIsAuthorized();

  return isAuth ? <LoginLinks /> : <LogoutLinks />;
};
