import { RouteConfig } from 'react-router-config';

export const filterRoutes = (isAuth: boolean) => (
  route: RouteConfig,
): boolean => {
  if (typeof route.forAuth === 'undefined') return true;

  return route.forAuth === isAuth;
};

export { AuthBranch } from './ui/auth-branch';
export { Paths } from './constants';
export * as model from './model';
