import { NavLink } from 'react-router-dom';
import * as visitor from 'entities/visitor';
import { URLS } from 'shared/library/router';
import { NavItem } from 'shared/ui';

type Props = Readonly<{
  url: string;
}>;

export const YourFeedLink = ({ url }: Props) => {
  const isAuth = visitor.selectors.useIsAuthorized();

  return isAuth ? (
    <NavItem>
      <NavLink exact className="nav-link" to={`${url}${URLS.YOUR_FEED}`}>
        Your Feed
      </NavLink>
    </NavItem>
  ) : null;
};
