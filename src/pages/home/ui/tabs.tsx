import { useRouteMatch } from 'react-router-dom';
import { useStore } from 'effector-react';
import { createFeedModel } from 'shared/feed';
import { URLS } from 'shared/library/router';
import { NavItem, NavLink } from 'shared/ui';
import { YourFeedLink } from './your-feed-link';

const feedModel = createFeedModel();

export const Tabs: React.FC = () => {
  const currentTag = useStore(feedModel.$currentTag);
  const { url } = useRouteMatch<{ url: string }>();

  return (
    <ul className="feed-toggle nav nav-pills outline-active">
      <YourFeedLink url={url} />
      <NavItem>
        <NavLink to={`${url}${URLS.GLOBAL_FEED}`}>Global Feed</NavLink>
      </NavItem>
      {currentTag && (
        <NavItem>
          <NavLink to={`${url}${URLS.FEED_BY_TAG}?tag=${currentTag}`}>
            <i className="ion-pound" />
            {currentTag}
          </NavLink>
        </NavItem>
      )}
    </ul>
  );
};
