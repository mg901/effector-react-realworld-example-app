import { NavLink } from 'react-router-dom';
import { ROUTES } from '@/shared/router';
import { NavItem } from '@/shared/ui';
import * as session from '@/entities/session';
import * as model from '../model';
import { LinkToGlobalFeed } from './link-to-global-feed';

export const Tabs = () => {
  const tag = model.selectors.useTagQuery();
  const isAuth = session.selectors.useIsAuthorized();

  return (
    <ul className="feed-toggle nav nav-pills outline-active">
      {/* <LinkToYourFeed /> */}
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
