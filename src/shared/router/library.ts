import type { RouteProps } from 'react-router-dom';
import { matchPath } from 'react-router-dom';
import { $locationPathname, $locationSearch } from './model';

export const createParams = <
  Params extends { [K in keyof Params]?: string } = {},
>(
  options: Parameters<typeof matchPath>[1],
) =>
  $locationPathname.map((pathname) => {
    const match = matchPath<Params>(pathname, options);

    return match ? match.params : ({} as Params);
  });

type CreaetRouteMatchArgs = {
  path: string | string[] | RouteProps;
};

export const createRouteMatch = <
  Params extends { [K in keyof Params]?: string } = {},
>(
  options: CreaetRouteMatchArgs,
) =>
  $locationPathname.map((pathname) => {
    return matchPath<Params>(pathname, options.path);
  });

export const createQuery = (name: string) =>
  $locationSearch.map((search) => new URLSearchParams(search).get(name));
