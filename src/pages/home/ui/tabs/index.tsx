import React from 'react';
import { NavLink } from 'react-router-dom';
import { useStore } from 'effector-react';
import { createFeedModel } from 'features/feed';
import * as auth from 'features/user';
import { Paths } from 'library/router';
import { NavLink as Link } from 'ui';

const feedModel = createFeedModel();

export const Tabs: React.FC = () => {
  const isAuth = useStore(auth.model.$isAuthorized);
  const currentTag = useStore(feedModel.$currentTag);

  return (
    <div className="feed-toggle">
      <ul className="nav nav-pills outline-active">
        {isAuth && (
          <li className="nav-item">
            <Link as={NavLink} to={Paths.YOUR_FEED} className="nav-link">
              Your Feed
            </Link>
          </li>
        )}
        <li className="nav-item">
          <Link as={NavLink} to={Paths.GLOBAL_FEED} className="nav-link">
            Global Feed
          </Link>
        </li>
        {currentTag && `#${currentTag}`}
      </ul>
    </div>
  );
};
