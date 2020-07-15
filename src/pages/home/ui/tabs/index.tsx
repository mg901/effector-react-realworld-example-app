import React from 'react';
import { useStore } from 'effector-react';
import { NavLink } from 'react-router-dom';
import { Links } from '../../../../router';
import { NavLink as Link } from '../../../../ui';
import { $$isAuthorized } from '../../../../auth';
import { $$currentTag } from '../../model';

export const Tabs: React.FC = () => {
  const isAuth = useStore($$isAuthorized);
  const currentTag = useStore($$currentTag);

  return (
    <nav>
      {isAuth && (
        <Link as={NavLink} to={Links.YOUR_FEED}>
          your feed
        </Link>
      )}
      <Link as={NavLink} to={Links.GLOBAL_FEED}>
        global feed
      </Link>
      {currentTag && `#${currentTag}`}
    </nav>
  );
};
