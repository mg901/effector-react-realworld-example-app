import { useRouteMatch } from 'react-router-dom';
import { useStore } from 'effector-react';
import { createFeedModel } from 'shared/feed';
import { Paths, AuthBranch } from 'router';
import { NavItem, NavLink } from 'ui';

const feedModel = createFeedModel();

export const Tabs: React.FC = () => {
  const currentTag = useStore(feedModel.$currentTag);
  const { url } = useRouteMatch<{ url: string }>();

  return (
    <ul className="feed-toggle nav nav-pills outline-active">
      <AuthBranch check="auth">
        <NavItem>
          <NavLink to={`${url}${Paths.YOUR_FEED}`}>Your Feed</NavLink>
        </NavItem>
      </AuthBranch>
      <NavItem>
        <NavLink to={`${url}${Paths.GLOBAL_FEED}`}>Global Feed</NavLink>
      </NavItem>
      {currentTag && (
        <NavItem>
          <NavLink to={`${url}${Paths.FEED_BY_TAG}?tag=${currentTag}`}>
            <i className="ion-pound" />
            {currentTag}
          </NavLink>
        </NavItem>
      )}
    </ul>
  );
};
