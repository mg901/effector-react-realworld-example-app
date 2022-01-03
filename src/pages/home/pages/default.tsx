import { Redirect } from 'react-router-dom';
import * as visitor from '@/entities/visitor';
import { ROUTES } from '@/shared/router';

export const Default = () => {
  const isAuth = visitor.selectors.useIsAuthorized();

  return isAuth ? (
    <Redirect to={ROUTES.yourFeed} />
  ) : (
    <Redirect to={ROUTES.globalFeed} />
  );
};
