import { NavLink } from 'react-router-dom';
import { ROUTES, useQuery } from '@/shared/router';
import { NavItem } from '@/shared/ui';
import * as session from '@/entities/session';
import { LinkToGlobalFeed } from './link-to-global-feed';

export const Tabs = () => {
  const tag = useQuery().get('tag');
  const isAuth = session.selectors.useIsAuthorized();

  return (
    <ul className="feed-toggle nav nav-pills outline-active">
      <NavItem>
        <NavLink exact className="nav-link" to={ROUTES.root}>
          {isAuth ? 'Your Feed' : 'Global Feed'}
        </NavLink>
      </NavItem>
      <LinkToGlobalFeed />
      {tag && (
        <NavItem>
          <NavLink
            exact
            className="nav-link"
            to={`${ROUTES.feedByTag}?tag=${tag}`}
          >
            <i className="ion-pound" />
            {tag}
          </NavLink>
        </NavItem>
      )}
    </ul>
  );
};
