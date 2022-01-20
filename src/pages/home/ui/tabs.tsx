import { NavLink } from 'react-router-dom';
import { ROUTES } from '@/shared/router';
import { NavItem } from '@/shared/ui';
import * as model from '../model';
import { LinkToYourFeed } from './link-to-your-feed';

export const Tabs = () => {
  const tag = model.selectors.useTagQuery();

  return (
    <ul className="feed-toggle nav nav-pills outline-active">
      <LinkToYourFeed />
      <NavItem>
        <NavLink exact className="nav-link" to={ROUTES.globalFeed}>
          Global Feed
        </NavLink>
      </NavItem>
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
