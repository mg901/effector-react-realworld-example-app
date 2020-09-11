import React from 'react';
import { NavLink } from 'react-router-dom';
import { useStore } from 'effector-react';
import { authModel } from '@core/auth';
import { Paths } from '@core/router';
import { NavLink as Link } from '@ui';
import { $currentTag } from '../../pages/feed-by-tag';

export const Tabs: React.FC = () => {
  const isAuth = useStore(authModel.$isAuthorized);
  const currentTag = useStore($currentTag);

  return (
    <nav>
      {isAuth && (
        <Link as={NavLink} to={Paths.YOUR_FEED}>
          your feed
        </Link>
      )}
      <Link as={NavLink} to={Paths.GLOBAL_FEED}>
        global feed
      </Link>
      {currentTag && `#${currentTag}`}
    </nav>
  );
};
