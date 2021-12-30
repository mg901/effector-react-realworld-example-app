import { useRouteMatch, NavLink } from 'react-router-dom';
import { ROUTES, useQuery } from '@/shared/router';
import { NavItem } from '@/shared/ui';
import { YourFeedLink } from './your-feed-link';

export const Tabs = () => {
  const { url } = useRouteMatch<{ url: string }>();
  const query = useQuery();
  const tag = query.get('tag');

  return (
    <ul className="feed-toggle nav nav-pills outline-active">
      <YourFeedLink url={url} />
      <NavItem>
        <NavLink exact className="nav-link" to={`${url}${ROUTES.GLOBAL_FEED}`}>
          Global Feed
        </NavLink>
      </NavItem>
      {tag && (
        <NavItem>
          <NavLink
            exact
            className="nav-link"
            to={`${url}${ROUTES.FEED_BY_TAG}?tag=${tag}`}
          >
            <i className="ion-pound" />
            {tag}
          </NavLink>
        </NavItem>
      )}
    </ul>
  );
};
