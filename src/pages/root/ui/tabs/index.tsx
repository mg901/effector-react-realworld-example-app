import React from 'react';
import { useStore } from 'effector-react';
import { NavLink } from 'react-router-dom';
import { NavLink as Link } from '../../../../ui';
import { $$isAuthorized } from '../../../../auth';
import { $$currentTag } from '../../model';

export const Tabs: React.FC = () => {
  const isAuth = useStore($$isAuthorized);
  const currentTag = useStore($$currentTag);

  return (
    <nav>
      {isAuth && (
        <Link as={NavLink} to="/your-feed">
          your feed
        </Link>
      )}
      <Link as={NavLink} to="/global-feed">
        global feed
      </Link>
      {currentTag && `#${currentTag}`}
    </nav>
  );
};
