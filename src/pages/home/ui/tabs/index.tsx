import React from 'react';
import { useStore } from 'effector-react';
import { NavLink } from 'react-router-dom';
import { Paths } from '../../../../router';
import { NavLink as Link } from '../../../../ui';
import { $$isAuthorized } from '../../../../auth';
import { $$currentTag } from '../../../feed-by-tag/model';

export const Tabs: React.FC = () => {
  const isAuth = useStore($$isAuthorized);
  const currentTag = useStore($$currentTag);

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
