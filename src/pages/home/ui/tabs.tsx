import { useStore } from 'effector-react';
import { Paths } from 'library/router';
import { createFeedModel } from 'shared-modules/feed';
import { model } from 'shared-modules/user';
import { NavItem, NavLink } from 'ui';

const feedModel = createFeedModel();

export const Tabs: React.FC = () => {
  const isAuth = useStore(model.$isAuthorized);
  const currentTag = useStore(feedModel.$currentTag);

  return (
    <ul className="feed-toggle nav nav-pills outline-active">
      {isAuth && (
        <NavItem>
          <NavLink to={Paths.YOUR_FEED}>Your Feed</NavLink>
        </NavItem>
      )}
      <NavItem>
        <NavLink to={Paths.GLOBAL_FEED}>Global Feed</NavLink>
      </NavItem>
      {currentTag && (
        <NavItem>
          <NavLink to={`${Paths.FEED_BY_TAG}?tag=${currentTag}`}>
            <i className="ion-pound" />
            {currentTag}
          </NavLink>
        </NavItem>
      )}
    </ul>
  );
};
