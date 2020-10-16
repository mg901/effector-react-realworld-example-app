import { RouteConfig } from 'react-router-config';

export const filterRoutes = (isAuth: boolean) => (
  route: RouteConfig,
): boolean => {
  if (!route.forAuth) return true;

  return route.forAuth === isAuth;
};
