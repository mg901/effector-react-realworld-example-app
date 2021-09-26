import { useRouteMatch, URLS, NavLink } from 'shared/library/router';
import { NavItem } from 'shared/ui';
import * as home from '../model';
import { YourFeedLink } from './your-feed-link';

export const Tabs: React.FC = () => {
  const currentTag = home.selectors.useCurrentTag();
  const { url } = useRouteMatch<{ url: string }>();

  return (
    <ul className="feed-toggle nav nav-pills outline-active">
      <YourFeedLink url={url} />
      <NavItem>
        <NavLink exact className="nav-link" to={`${url}${URLS.GLOBAL_FEED}`}>
          Global Feed
        </NavLink>
      </NavItem>
      {currentTag && (
        <NavItem>
          <NavLink
            exact
            className="nav-link"
            to={`${url}${URLS.FEED_BY_TAG}?tag=${currentTag}`}
          >
            <i className="ion-pound" />
            {currentTag}
          </NavLink>
        </NavItem>
      )}
    </ul>
  );
};
