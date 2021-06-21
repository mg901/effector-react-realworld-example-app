import * as user from 'shared/entities/user';
import { NavItem, NavLink } from 'shared/ui';
import { URLS } from 'router';

type Props = Readonly<{
  url: string;
}>;

export const YourFeedLink: React.FC<Props> = ({ url }) => {
  const isAuth = user.selectors.useIsAuth();

  if (!isAuth) return null;

  return (
    <NavItem>
      <NavLink to={`${url}${URLS.YOUR_FEED}`}>Your Feed</NavLink>
    </NavItem>
  );
};
