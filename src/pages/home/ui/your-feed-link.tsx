import * as visitor from 'entities/visitor';
import { URLS, NavLink } from 'shared/library/router';
import { NavItem } from 'shared/ui';

type Props = Readonly<{
  url: string;
}>;

export const YourFeedLink: React.FC<Props> = ({ url }) => {
  const isAuth = visitor.selectors.useIsAuth();

  return (
    <>
      {isAuth ? (
        <NavItem>
          <NavLink exact className="nav-link" to={`${url}${URLS.YOUR_FEED}`}>
            Your Feed
          </NavLink>
        </NavItem>
      ) : null}
    </>
  );
};
