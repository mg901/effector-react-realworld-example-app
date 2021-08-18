import * as user from 'entities/user';
import { URLS } from 'shared/library/router';
import { NavItem, NavLink } from 'shared/ui';

type Props = Readonly<{
  url: string;
}>;

export const YourFeedLink: React.FC<Props> = ({ url }) => {
  const isAuth = user.selectors.useIsAuth();

  return (
    <>
      {isAuth ? (
        <NavItem>
          <NavLink to={`${url}${URLS.YOUR_FEED}`}>Your Feed</NavLink>
        </NavItem>
      ) : null}
    </>
  );
};
