import * as user from 'entities/user';
import * as router from 'shared/library/router';
import { NavItem, NavLink } from 'shared/ui';

type Props = Readonly<{
  url: string;
}>;

export const YourFeedLink: React.FC<Props> = ({ url }) => {
  const isAuth = user.selectors.useIsAuth();

  if (!isAuth) return null;

  return (
    <NavItem>
      <NavLink to={`${url}${router.URLS.YOUR_FEED}`}>Your Feed</NavLink>
    </NavItem>
  );
};
