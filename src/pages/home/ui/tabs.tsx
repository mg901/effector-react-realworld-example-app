import { NavLink } from 'react-router-dom';
import { ROUTES, useQuery } from '@/shared/router';
import { NavItem } from '@/shared/ui';
import { LinkToYourFeed } from './link-to-your-feed';

export const Tabs = () => {
  const tag = useQuery().get('tag');

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
